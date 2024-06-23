import Job from '../domain/models/job_model';
import { IJobRepository } from '../infra/repository/job_repository';

export default class ListJobsUseCase {
  constructor(readonly jobRepository: IJobRepository) {}

  async execute(): Promise<Job[]> {
    const jobs = await this.jobRepository.fetchJobs();
    return jobs;
  }
}
