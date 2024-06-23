import pgDB from '../database';
import { PgPromiseAdapter } from '../database/postgres_db_connection';
import { JobRepositoryDatabase } from './job_repository';

const jobRepo = new JobRepositoryDatabase(pgDB);
export { jobRepo };
