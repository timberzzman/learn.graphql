import { ApolloServer, gql } from "apollo-server";
import { serviceTypeDefs } from "./service/serviceSchema";
import { serviceResolvers } from "./service/serviceResolvers";

const server = new ApolloServer({typeDefs: serviceTypeDefs, resolvers: serviceResolvers});

// @ts-ignore
server.listen().then(( {url }) => {
   console.log(`Server ready at ${url}`);
});