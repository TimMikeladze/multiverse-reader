"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var typeDefs = "\n  type ComicBookFile {\n    path: String!\n  }\n\n  type Query {\n    comicBookFiles: [ComicBookFile]\n  }\n";
var resolvers = {};
var lambda = new graphql_yoga_1.GraphQLServerLambda({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: function (req, con) {
        return {};
    }
});
exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
//# sourceMappingURL=handler.js.map