import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './schema/schema';
import resolvers from './resolvers/resolvers';

 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 3003 }, () =>
  console.log('Now browse to http://localhost:3003' + server.graphqlPath)
);
  