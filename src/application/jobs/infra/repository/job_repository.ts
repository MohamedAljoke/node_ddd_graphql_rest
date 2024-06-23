import mockJobs from '@/mock/jobs_mock';
import Job from '../../domain/models/job_model';
import { IDatabaseConnection } from '../database/postgres_db_connection';

export interface IJobRepository {
  fetchJobs(): Promise<Job[]>;
}

export class JobRepositoryDatabase implements IJobRepository {
  constructor(readonly dbConnection: IDatabaseConnection) {}
  async fetchJobs(): Promise<Job[]> {
    const jobsDB = await this.dbConnection.query('SELECT * FROM jobs;', []);
    const jobs = jobsDB.map((job) => {
      return new Job(
        job.id,
        job.company_id,
        job.title,
        job.description,
        job.status,
      );
    });
    return jobs;
  }
}
