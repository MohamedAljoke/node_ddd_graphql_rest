import Job, { JobStatus } from '@/application/domain/models/job_model';
import { DeepMockProxy, mockDeep, mockReset } from 'vitest-mock-extended';
import { IJobRepository } from '@/application/infra/repository/job_repository';
import CreateJobUseCase from '@/application/usecase/create_job_usecase';
import { afterAll, beforeAll, describe, expect, it, beforeEach } from 'vitest';

describe('CreateJobUseCase', () => {
  let jobRepository: DeepMockProxy<IJobRepository>;
  let sut: CreateJobUseCase;
  let params: Job;
  beforeAll(() => {
    jobRepository = mockDeep<IJobRepository>();
    jobRepository.createJob.mockResolvedValue(
      new Job('jobId', 'companyId', 'title', 'description', JobStatus.Open),
    );
    params = new Job(
      'jobId',
      'companyId',
      'title',
      'description',
      JobStatus.Open,
    );
  });
  beforeEach(() => {
    sut = new CreateJobUseCase(jobRepository);
  });
  afterAll(() => {
    mockReset(jobRepository);
  });
  it('should create new job', async () => {
    const job = await sut.execute(params);
    //then
    expect(job.companyId).toBe(params.companyId);
  });
});
