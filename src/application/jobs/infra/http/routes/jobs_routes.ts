import { Router } from 'express';
import { jobsController } from '../controllers';

const jobsRoutes = Router();

jobsRoutes.get('/', (req, res) =>
  jobsController.execute(req, res, jobsController.fetchJobs),
);

export default jobsRoutes;
