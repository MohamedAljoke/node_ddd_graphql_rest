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
}
