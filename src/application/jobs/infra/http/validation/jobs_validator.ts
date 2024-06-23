import { JobStatus } from '@/application/jobs/domain/models/job_model';
import zod, { nativeEnum, object, string, TypeOf } from 'zod';

export const jobsObject = object({
  title: zod
    .string()
    .min(1, { message: 'Error title is required' })
    .max(254, { message: 'Error title is too long' }),
  description: zod
    .string()
    .min(1, { message: 'Error description is required' })
    .max(254, { message: 'Error description is too long' }),
  // status: nativeEnum(JobStatus, { message: 'Invalid job status' }),
});
export const jobsBodySchema = zod.object({
  body: jobsObject,
});
export type JobsInput = TypeOf<typeof jobsBodySchema>;
