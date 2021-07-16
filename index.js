const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Post = require("./models/Post");
const { MONGODB } = require("./config.js");

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    #sayHi: String!
    getPosts: [Post]
  }
`;
const resolvers = {
  Query: {
    // sayHi: () => "Italyyy!!!",
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        console.log("an error occured bhai");
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Password: xBZCaLVBr0deq9pS;
mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("database connected");
});

server
  .listen({
    port: 5000,
  })
  .then((res) => {
    console.log(`server running at ${res.url}`);
  });
