import { ApolloServer } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";
import typeDefs from "../../graphql/schema";

const prisma = new PrismaClient();

const resolvers = {
    Query: {
        tweets: async () => {
            return await prisma.tweet.findMany({
                include: {
                    user: true,
                },
            });
        },
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default apolloServer.createHandler({ path: "/api/graphql" });