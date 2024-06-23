import CompanyController from './company_controller';
import JobsController from './jobs_controller';
import { createJobUseCase, listJobsUseCase } from '@/application/usecase';

const jobsController = new JobsController(listJobsUseCase);
const companyController = new CompanyController(createJobUseCase);
export { jobsController, companyController };
