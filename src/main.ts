import createServer from '@connections/server';
import log from '@shared/utils/logger';
import pgDB from './application/jobs/infra/database';
import { PgPromiseAdapter } from './application/jobs/infra/database/postgress_db_connection';

const port = process.env.PORT || 8000;

async function startServer() {
  try {
    const httpServer = await createServer();
    await new Promise<void>((resolve) => {
      log.info(`Server ready at http://localhost:${port}`);
      httpServer.listen({ port: port }, resolve);
    });
    log.info(`connecting to postgres db`);
    pgDB.connect();
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  } catch (error) {
    log.error(`Error starting server:`);
    console.log(error);
  }
}

startServer();

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
