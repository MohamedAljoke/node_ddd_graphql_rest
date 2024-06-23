import Job, { JobStatus } from '@/application/domain/models/job_model';
import { afterAll, beforeAll, describe, expect, it, beforeEach } from 'vitest';

describe('JobModel', () => {
  it('should form new job', () => {
    //given
    const jobId = 'job123';
    const companyId = 'company456';
    const title = 'Software Developer';
    const description = 'Develop software applications';
    const status = JobStatus.Open;
    //when
    const job = new Job(jobId, companyId, title, description, status);
    //then
    expect(job.jobId).toBe(jobId);
    expect(job.companyId).toBe(companyId);
    expect(job.title).toBe(title);
    expect(job.description).toBe(description);
    expect(job.getStatus()).toBe(status);
  });
  it('should create new job', () => {
    //given
    const companyId = 'company456';
    const title = 'Software Developer';
    const description = 'Develop software applications';
    //when
    const job = Job.create(companyId, title, description);
    //then
    expect(job.companyId).toBe(companyId);
    expect(job.title).toBe(title);
    expect(job.description).toBe(description);
    expect(job.getStatus()).toBe(JobStatus.Open);
  });
  it('should close job', () => {
    //given
    const jobId = 'job123';
    const companyId = 'company456';
    const title = 'Software Developer';
    const description = 'Develop software applications';
    const status = JobStatus.Open;
    //when
    const job = new Job(jobId, companyId, title, description, status);
    //then
    job.close();
    expect(job.getStatus()).toBe(JobStatus.Closed);
  });
});
