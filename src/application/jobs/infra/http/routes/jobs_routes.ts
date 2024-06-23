import { Response, Request, Router } from 'express';
import validate from '../middlewares/validate_resources';
import { jobsBodySchema } from '../validation/jobs_validator';
import { jobsController } from '../controllers';

const jobsRoutes = Router();

jobsRoutes.get('/', (req, res) =>
  jobsController.execute(req, res, jobsController.fetchJobs),
);
// jobsRoutes.post('/', validate(jobsBodySchema), getEmployeesById);
export default jobsRoutes;
