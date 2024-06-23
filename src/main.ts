import createServer from '@connections/server';
import log from '@shared/utils/logger';
import pgDB from './application/jobs/infra/database';

const port = process.env.PORT || 8000;

async function startServer() {
  try {
    const httpServer = await createServer();
    await new Promise<void>((resolve) => {
      log.info(`Server ready at http://localhost:${port}`);
      httpServer.listen({ port: port }, resolve);
    });
    log.info(`connecting to postgres db`);
    await connectToDbWithRetry(5, 5000);
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  } catch (error) {
    log.error(`Error starting server:`);
    console.log(error);
  }
}

startServer();

async function connectToDbWithRetry(attempts: number, delay: number) {
  for (let i = 0; i < attempts; i++) {
    try {
      await pgDB.connect();
      log.info('Connected to PostgreSQL database');
      return;
    } catch (error) {
      log.error(
        `Failed to connect to PostgreSQL database (Attempt ${i + 1} of ${attempts}): ${error.message}`,
      );
      if (i < attempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw new Error(
          'Exceeded maximum retry attempts to connect to PostgreSQL database',
        );
      }
    }
  }
}
async function shutdown() {
  try {
    await pgDB.close();
    log.info('Database connection closed');
    process.exit(0);
  } catch (err) {
    log.error('Error during shutdown:', err);
    process.exit(1);
  }
}
