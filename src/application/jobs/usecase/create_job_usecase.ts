import Job from '../domain/models/job_model';
import { IJobRepository } from '../infra/repository/job_repository';

export default class CreateJobUseCase {
  constructor(readonly jobRepository: IJobRepository) {}
  async execute(job: Job): Promise<Job> {
    //TODO: validate if company does not exist
    const jobs = await this.jobRepository.createJob(job);
    return jobs[0];
  }
}
