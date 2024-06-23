import Job from '../domain/models/job_model';
import { IJobRepository } from '../infra/repository/job_repository';

export default class CreateJobUseCase {
  constructor(readonly jobRepository: IJobRepository) {}
  async execute(job: Job): Promise<Job> {
    const jobRep = await this.jobRepository.createJob(job);
    return jobRep;
  }
}
