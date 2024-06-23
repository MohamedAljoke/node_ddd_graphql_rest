import log from '@/shared/utils/logger';
import { BaseController } from './base_controller';
import { JobsInput } from '../validation/jobs_validator';
import Job from '@/application/jobs/domain/models/job_model';
import CreateJobUseCase from '@/application/jobs/usecase/create_job_usecase';

export default class CompanyController extends BaseController {
  private createJobUseCase: CreateJobUseCase;
  constructor(createJobUseCase: CreateJobUseCase) {
    super();
    this.createJobUseCase = createJobUseCase;
  }

  async createJob() {
    try {
      const companyId = this.req.params.companyId;
      const dto: JobsInput['body'] = this.req.body as JobsInput['body'];
      const job = Job.create(companyId, dto.title, dto.description);
      const created = await this.createJobUseCase.execute(job);
      return this.ok<Job>(this.res, created);
    } catch (e) {
      log.error(e);
      return this.fail('error processing the request');
    }
  }
}
