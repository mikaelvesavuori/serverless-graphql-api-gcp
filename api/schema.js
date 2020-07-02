const { gql } = require("apollo-server-cloud-functions");

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    hello: String
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    hello: () => "Hello world!",
  },
};

module.exports = { books, typeDefs, resolvers };
