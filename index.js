const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;
const resolvers = {
  Query: {
    sayHi: () => "Italyyy!!!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Password: xBZCaLVBr0deq9pS;
mongoose.connect()

server
  .listen({
    port: 5000,
  })
  .then((res) => {
    console.log(`server running at ${res.url}`);
  });
