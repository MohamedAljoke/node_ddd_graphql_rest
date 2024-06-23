import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';

import { expressMiddleware } from '@apollo/server/express4';
import getApolloServer, { apolloContext } from './graphql';
import apiRoutes from '@/application/jobs/infra/http/routes';

async function createServer() {
  const app = express();
  const httpServer = http.createServer(app);

  app.use(
    cors({
      origin: process.env.front || 'http://localhost:3000',
      credentials: true,
    }),
  );

  app.use(express.json());
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [
            `'self'`,
            'data:',
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [
            `'self'`,
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      },
    }),
  );

  //rest api
  app.use('/api/v1', apiRoutes);

  //graphql
  const apolloServer = await getApolloServer(httpServer);
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(apolloServer, {
      context: apolloContext,
    }),
  );

  return httpServer;
}

export default createServer;
