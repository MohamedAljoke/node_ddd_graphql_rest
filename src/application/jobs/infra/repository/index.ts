import { PgPromiseAdapter } from '../database/postgres_db_connection';
import { JobRepositoryDatabase } from './job_repository';

const pg = new PgPromiseAdapter();
const jobRepo = new JobRepositoryDatabase(pg);
export { jobRepo };
