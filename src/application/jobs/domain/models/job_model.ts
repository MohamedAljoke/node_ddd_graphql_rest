export enum JobStatus {
  Open = 'Open',
  Closed = 'Closed',
  InProgress = 'InProgress',
  OnHold = 'OnHold',
}

export default class Job {
  constructor(
    readonly jobId: string,
    readonly companyId: string,
    readonly title: string,
    readonly description: string,
    readonly status: JobStatus,
  ) {}

  static create(companyId: string, title: string, description: string) {
    const jobId = crypto.randomUUID();
    const status = JobStatus.Open;
    return new Job(jobId, companyId, title, description, status);
  }
}
