import { mergeRawSchemas } from '@/shared/utils/merge_raw_schema';
import jobs from './jobs/jobs_schema';
import gql from 'graphql-tag';
import jobSchema from './jobs/jobs_schema';

export const rawSchema = mergeRawSchemas(
  {
    typeDefs: [
      // we create empty main types, we can later extend them in the shards
      gql`
        type Query {
          _empty: String
        }

        type Mutation {
          _empty: String
        }

        type Subscription {
          _empty: String
        }
      `,
    ],
    resolvers: {},
  },
  jobSchema,
);
