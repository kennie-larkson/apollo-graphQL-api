const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen().then(() => {
  console.log(`Server is running... `);
});
