import { Response, Request, Router } from 'express';

const apiRoutes = Router();

export const appVersion = '1.0.0';
apiRoutes.get('/version', (_: Request, res: Response) => {
  return res.status(200).json({ version: appVersion });
});

// apiRoutes.use('/employees', employeesRoutes);
export default apiRoutes;
