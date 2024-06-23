import log from '@/shared/utils/logger';
import pgp from 'pg-promise';
import pg from 'pg-promise/typescript/pg-subset';

export interface IDatabaseConnection {
  query(statement: string, params: any): Promise<any>;
  close(): Promise<void>;
  connect(): void;
  getConnection(): pgp.IDatabase<{}, pg.IClient>;
  ping(): Promise<void>;
}
const dbStr =
  process.env.dbUri || 'postgres://postgres:123456@localhost:5432/app';
export class PgPromiseAdapter implements IDatabaseConnection {
  connection: pgp.IDatabase<{}, pg.IClient>;
  constructor() {}

  async connect() {
    if (!this.connection) {
      this.connection = pgp()(dbStr);
    }

    await this.ping();
  }
  getConnection(): pgp.IDatabase<{}, pg.IClient> {
    if (this.connection) {
      return this.connection;
    }
    this.connect();
    return this.connection;
  }
  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }
  close(): Promise<void> {
    if (this.connection) {
      this.connection.$pool.end();
    }
    return;
  }
  async ping(): Promise<void> {
    try {
      await this.connection.query('SELECT 1');
      log.info(`postgres db connected`);
    } catch (error) {
      log.error('Database connection error:', error);
      throw error;
    }
  }
}
