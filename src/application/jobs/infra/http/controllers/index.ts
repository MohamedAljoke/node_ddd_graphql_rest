import CompanyController from './company_controller';
import JobsController from './jobs_controller';
import { listJobsUseCase } from '@/application/jobs/usecase';

const jobsController = new JobsController(listJobsUseCase);
const companyController = new CompanyController(listJobsUseCase);
export { jobsController, companyController };
