import JobsController from './jobs_controller';
import { listJobsUseCase } from '@/application/jobs/usecase';

const jobsController = new JobsController(listJobsUseCase);

export { jobsController };
