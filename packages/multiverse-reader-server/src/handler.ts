import { GraphQLServerLambda } from 'graphql-yoga';

const typeDefs = `
  type ComicBookFile {
    path: String!
  }

  type Query {
    comicBookFiles: [ComicBookFile]
  }
`;

const resolvers = {

};

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
  context: (req, con) => {
    return {

    };
  },
});

export const server = lambda.graphqlHandler;
export const playground = lambda.playgroundHandler;
