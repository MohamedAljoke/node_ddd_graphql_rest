import pgDB from '@/application/jobs/infra/database';
import log from '@/shared/utils/logger';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function connectToPostgres() {
  const maxRetries = 5;
  const retryDelay = 5000; // 5 seconds
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(attempt);
      await pgDB.connect();
      log.info('Postgres DB connected');
      return;
    } catch (error) {
      log.error(
        `Attempt ${attempt} to connect to Postgres failed. Error: ${error.message}`,
      );
      if (attempt < maxRetries) {
        log.info(`Retrying in ${retryDelay / 1000} seconds...`);
        await delay(retryDelay);
      } else {
        log.error('Maximum retry attempts reached. Exiting...');
        process.exit(1);
      }
    }
  }
}
