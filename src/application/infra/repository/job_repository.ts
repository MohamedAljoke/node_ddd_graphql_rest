import mockJobs from '@/mock/jobs_mock';
import { IDatabaseConnection } from '../database/postgress_db_connection';
import Job from '@/application/domain/models/job_model';

export interface IJobRepository {
  fetchJobs(): Promise<Job[]>;
  createJob(job: Job): Promise<Job>;
}

export class JobRepositoryDatabase implements IJobRepository {
  constructor(readonly dbConnection: IDatabaseConnection) {}
  async createJob(job: Job): Promise<Job> {
    const { companyId, title, description } = job;
    const query = `
    INSERT INTO jobs (company_id, title, description, status) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *;
    `;
    const values = [companyId, title, description, job.getStatus()];
    const jobDB = (await this.dbConnection.query(query, values))[0];
    return new Job(
      jobDB.id,
      jobDB.company_id,
      jobDB.title,
      jobDB.description,
      jobDB.status,
    );
  }
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
