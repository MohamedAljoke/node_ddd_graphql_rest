import log from '@/shared/utils/logger';
import * as express from 'express';
import {} from '../../repository/job_repository';
import ListJobsUseCase from '@/application/jobs/usecase/list_jobs_usecase';
import { BaseController } from './base_controller';
import { JobsInput } from '../validation/jobs_validator';
import Job from '@/application/jobs/domain/models/job_model';

export default class JobsController extends BaseController {
  private listJobsUseCase: ListJobsUseCase;
  constructor(listJobsUseCase: ListJobsUseCase) {
    super();
    this.listJobsUseCase = listJobsUseCase;
  }

  async fetchJobs() {
    try {
      const dto: JobsInput = this.req.body as JobsInput;
      const jobs = await this.listJobsUseCase.execute();
      return this.ok<Job[]>(this.res, jobs);
    } catch (e) {
      log.error(e);
      return this.fail('error processing the request');
    }
  }
}
