const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const { books, typeDefs, resolvers } = require('./schema');

function configureServer() {
	const app = express();
	app.use(cors());

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		playground: true,
		introspection: true,
		context: ({ req, res }) => ({
			headers: req.headers,
			req,
			res
		})
	});

	server.applyMiddleware({ app });

	return app;
}

module.exports = configureServer;
