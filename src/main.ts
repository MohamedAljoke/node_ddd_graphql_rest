import createServer from '@connections/server';
import log from '@shared/utils/logger';
import connectToPostgres from './connections/postgres_db';
import pgDB from './application/infra/database';

const port = process.env.PORT || 8000;

async function startServer() {
  try {
    const httpServer = await createServer();
    await new Promise<void>(async (resolve) => {
      log.info(`Server ready at http://localhost:${port}`);
      httpServer.listen({ port: port }, resolve);
      log.info(`connecting to postgres db`);
      await connectToPostgres();
    });
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
