import { gql } from 'graphql-tag';

export const jobTypeDefs = gql`
  type Query {
    fetchJobsList: String
  }
  type Mutation {
    submitApplication(input: ApplicationInput!): ApplicationResponse
  }
  input ApplicationInput {
    fullName: String!
    email: String!
    phone: String
    resume: String
    coverLetter: String
  }
  type ApplicationResponse {
    success: Boolean!
    message: String
  }
`;
