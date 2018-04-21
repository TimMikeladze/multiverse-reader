import { GraphQLServerLambda } from 'graphql-yoga';
import * as path from 'path';
import * as serve from 'serve';

import {
  ARCHIVE_TYPES,
  getAllFiles,
  IMAGE_TYPES,
  unarchiveFile,
} from '.';

const typeDefs = `
  type ComicBookPage {
    name: String!
    path: String!
    page: Int!
    image: String!
    totalPages: Int!
  }

  type ComicBookFile {
    name: String!
    path: String!
    pages(
      cursor: Int
      limit: Int
    ): [ComicBookPage]
  }

  type Query {
    comicBookFiles: [ComicBookFile]
  }
`;

const cache = {};

const resolvers = {
  ComicBookFile: {
    pages: async (root, { cursor, limit }) => {
      const unarchivedFile = await unarchiveFile(root.path, process.env.CACHE_PATH);

      const pages = cache[root.name] || getAllFiles(unarchivedFile.path, IMAGE_TYPES)
        .map((file, index, array) => {
          const image = path.join(unarchivedFile.name, path.basename(file));
          return {
            name: path.basename(file).slice(0, -path.extname(file).length),
            path: file,
            image: process.env.FILE_SERVER_PATH ? `${process.env.FILE_SERVER_PATH}/${image}` : image,
            page: (index + 1),
            totalPages: array.length,
          };
        });

      if (!cache[root.name]) {
        cache[root.name] = [...pages];
      }

      return pages.slice(cursor || 0, (cursor + limit) || pages.length);
    },
  },
  Query: {
    comicBookFiles: () => {
      const files = getAllFiles(process.env.LIBRARY_PATH, ARCHIVE_TYPES)
        .map((file) => {
          return {
            name: path.basename(file).slice(0, -path.extname(file).length),
            path: file,
          };
        });
      return files;
    },
  },
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
