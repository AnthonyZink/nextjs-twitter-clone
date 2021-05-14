import { gql } from "apollo-server";

const typeDefs = gql`
    type User {
        email: String!
        id: ID!
        password: String!
        createdAt: String
        updatedAt: String
        username: String!
        twitterId: String!
    }

    type Tweet {
        id: ID!
        content: String
        user: User
        createdAt: String
        updatedAt: String
    }

    type Query {
        tweets: [Tweet]
    }
`;

export default typeDefs;
