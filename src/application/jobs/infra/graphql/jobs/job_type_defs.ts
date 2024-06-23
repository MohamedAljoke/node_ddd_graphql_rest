import { gql } from 'graphql-tag';

export const jobTypeDefs = gql`
  enum JobStatus {
    open
    closed
    in_progress
    on_hold
  }
  type Job {
    jobId: ID!
    companyId: ID!
    title: String!
    description: String!
    status: JobStatus!
  }

  type Query {
    fetchJobsList: [Job!]!
  }
`;
