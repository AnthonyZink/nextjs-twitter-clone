import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Tweets from "../components/Tweets";
import Assets from "../components/Assets";
import { gql, useQuery } from "@apollo/client";

export default function Home() {
    const query = gql`
        query TweetsQuery {
            tweets {
                id
                content
                user {
                    twitterId
                    username
                }
                createdAt
            }
        }
    `;

    const { data, loading, error } = useQuery(query);

    return (
        <div>
            <Head>
                <title>Twitter clone app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex justify-center bg-white dark:bg-gray-900">
                <Sidebar />

                <Tweets tweets={data?.tweets} />

                <Assets />
            </main>
        </div>
    );
}
