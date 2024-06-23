import pgDB from '../database';
import { JobRepositoryDatabase } from './job_repository';

const jobRepo = new JobRepositoryDatabase(pgDB);
export { jobRepo };
