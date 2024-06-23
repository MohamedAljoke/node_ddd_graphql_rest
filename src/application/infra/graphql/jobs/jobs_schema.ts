import { mergeRawSchemas } from '@/shared/utils/merge_raw_schema';
import { jobResolver } from './job_resolvers';
import { jobTypeDefs } from './job_type_defs';

export const jobs = {
  resolvers: jobResolver,
  typeDefs: [jobTypeDefs],
};
const jobSchema = mergeRawSchemas(jobs);
export default jobSchema;
