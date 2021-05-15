import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Tweets from "../components/Tweets";
import Assets from "../components/Assets";
import { gql, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

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

const Home = () => {
    const { data, loading, error } = useQuery(query);

    const dispatch = useDispatch();
    dispatch({
        type: "INIT_TWEETS",
        data: data?.tweets,
    });

    return (
        <div>
            <Head>
                <title>Twitter clone app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex justify-center bg-white dark:bg-black">
                <Sidebar />

                <Tweets />

                <Assets />
            </main>
        </div>
    );
};

export default Home;
