export const jobResolver = {
  Query: {
    fetchJobsList: () => {},
  },
  Mutation: {
    submitApplication: (_, { name }) => `Hello ${name}`,
  },
};
