import { jobRepo } from '../infra/repository';
import ListJobsUseCase from './list_jobs_usecase';

const listJobsUseCase = new ListJobsUseCase(jobRepo);

export { listJobsUseCase };
