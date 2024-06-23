import mongoose from 'mongoose';
import log from '@/shared/utils/logger';

export interface IDatabaseConnection {
  connect(): Promise<void>;
  close(): Promise<void>;
  getConnection(): mongoose.Connection;
  ping(): Promise<void>;
}

const dbStr =
  process.env.dbMongoUri || 'mongodb://root:password@localhost:27017/';

export class MongooseAdapter implements IDatabaseConnection {
  private connection: mongoose.Connection;

  constructor() {}

  async connect(): Promise<void> {
    if (!this.connection) {
      await mongoose.connect(dbStr);
      this.connection = mongoose.connection;

      this.connection.on('error', (error) => {
        log.error('Database connection error:', error);
        throw error;
      });

      this.connection.once('open', () => {
        log.info('MongoDB connected');
      });
    }
  }

  getConnection(): mongoose.Connection {
    if (!this.connection) {
      throw new Error(
        'Database connection has not been established. Call connect() first.',
      );
    }
    return this.connection;
  }

  async close(): Promise<void> {
    if (this.connection) {
      await this.connection.close();
    }
  }

  async ping(): Promise<void> {
    if (!this.connection) {
      await this.connect();
    }

    try {
      await this.connection.db.command({ ping: 1 });
      log.info('MongoDB ping successful');
    } catch (error) {
      log.error('MongoDB ping failed:', error);
      throw error;
    }
  }
}
