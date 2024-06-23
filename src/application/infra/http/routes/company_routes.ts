import { Router } from 'express';
import { jobsBodySchema } from '../validation/jobs_validator';
import validate from '../middlewares/validate_resources';
import { companyController } from '../controllers';

const companyRoutes = Router();

companyRoutes.post('/:companyId', validate(jobsBodySchema), (req, res) =>
  companyController.execute(req, res, companyController.createJob),
);
export default companyRoutes;
