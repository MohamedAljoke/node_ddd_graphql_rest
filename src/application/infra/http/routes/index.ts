import { Response, Request, Router } from 'express';
import jobsRoutes from './jobs_routes';
import companyRoutes from './company_routes';

const apiRoutes = Router();

export const appVersion = '1.0.0';
apiRoutes.get('/version', (_: Request, res: Response) => {
  return res.status(200).json({ version: appVersion });
});

apiRoutes.use('/jobs', jobsRoutes);
apiRoutes.use('/company', companyRoutes);

export default apiRoutes;
