import ListJobsUseCase from '@/application/jobs/usecase/list_jobs_usecase';
import { jobRepo } from '../../repository';

export const jobResolver = {
  Query: {
    fetchJobsList: async () => {
      const listJobsUseCase = new ListJobsUseCase(jobRepo);
      const jobs = await listJobsUseCase.execute();
      return jobs;
    },
  },
};
