const { ApolloServer, gql } = require("apollo-server-cloud-functions");

const { books, typeDefs, resolvers } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //playground: true,
  //introspection: true,
  context: ({ req, res }) => ({
    headers: req.headers,
    req,
    res,
  }),
  cors: {
    origin: "*",
    credentials: true,
  },
});

exports.api = server.createHandler();
