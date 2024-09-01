export const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    bio: String
    verified: Boolean!
  }

  type Tweet {
    id: ID!
    tweetName: String!
    characters: String!
    ratings: Int!
    timePosted: String!
    user: User!
  }

  type Query {
    users: [User!]!
    tweets: [Tweet!]!
    user(id: ID!): User
    tweet(id: ID!): Tweet
  }
`