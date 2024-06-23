import mockJobs from '@/mock/jobs_mock';
import Job from '../../domain/models/job_model';
import { IDatabaseConnection } from '../database/postgres_db_connection';

export interface IJobRepository {
  fetchJobs(): Promise<Job[]>;
}

export class JobRepositoryDatabase implements IJobRepository {
  constructor(readonly dbConnection: IDatabaseConnection) {}
  async fetchJobs(): Promise<Job[]> {
    await this.dbConnection.query('select * ', []);
    const jobs = mockJobs; //todo: get from db
    return jobs;
  }
}
