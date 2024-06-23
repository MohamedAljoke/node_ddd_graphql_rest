import Job, { JobStatus } from '@/application/jobs/domain/models/job_model';

const mockJobs: Job[] = [
  new Job(
    'job001',
    'companyA',
    'Software Engineer',
    'Develop and maintain web applications.',
    JobStatus.Open,
  ),
  new Job(
    'job002',
    'companyB',
    'Product Manager',
    'Lead product development from conception to launch.',
    JobStatus.Closed,
  ),
  new Job(
    'job003',
    'companyC',
    'Graphic Designer',
    'Create visual concepts to communicate ideas.',
    JobStatus.InProgress,
  ),
  new Job(
    'job004',
    'companyD',
    'Data Scientist',
    'Analyze and interpret complex data sets.',
    JobStatus.OnHold,
  ),
  new Job(
    'job005',
    'companyE',
    'Marketing Specialist',
    'Develop and execute marketing campaigns.',
    JobStatus.Open,
  ),
  new Job(
    'job006',
    'companyF',
    'Human Resources Manager',
    'Oversee HR activities and staff.',
    JobStatus.InProgress,
  ),
  new Job(
    'job007',
    'companyG',
    'Sales Representative',
    'Sell products and services to customers.',
    JobStatus.Closed,
  ),
  new Job(
    'job008',
    'companyH',
    'Customer Support Specialist',
    'Provide customer service and support.',
    JobStatus.OnHold,
  ),
  new Job(
    'job009',
    'companyI',
    'DevOps Engineer',
    'Manage and automate IT infrastructure.',
    JobStatus.Open,
  ),
  new Job(
    'job010',
    'companyJ',
    'UX/UI Designer',
    'Design user interfaces and improve user experience.',
    JobStatus.Closed,
  ),
];

export default mockJobs;
