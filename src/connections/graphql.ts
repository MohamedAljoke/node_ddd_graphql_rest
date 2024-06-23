import http from 'http';
import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { rawSchema } from '@/application/infra/graphql';

const schema = makeExecutableSchema({
  typeDefs: rawSchema.typeDefs,
  resolvers: rawSchema.resolvers,
});

export default async function getApolloServer(httpServer: http.Server) {
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }), //graceful shutdown
    ],
  });
  await server.start();
  return server;
}

export const apolloContext = async ({ req }) => {
  return { token: req.headers.token };
};
