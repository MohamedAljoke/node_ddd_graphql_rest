import { jobRepo } from '../infra/repository';
import CreateJobUseCase from './create_job_usecase';
import ListJobsUseCase from './list_jobs_usecase';

const listJobsUseCase = new ListJobsUseCase(jobRepo);
const createJobUseCase = new CreateJobUseCase(jobRepo);

export { listJobsUseCase, createJobUseCase };
