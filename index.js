import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";

const resolvers = {
  Query: {
    users() {
      return db.users;
    },
    tweets() {
      return db.tweets;
    },
    user(_, args) {
      return db.users.find(user => user.id === args.id);
    },
    tweet(_, args) {
      return db.tweets.find(tweet => tweet.id === args.id);
    }
  },
  Tweet: {
    user(parent) {
      return db.users.find(user => user.id === parent.user_id);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`Server ready at ${url}`);