import Head from "next/head";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Tweets from "../components/Tweets";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Twitter clone app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex bg-gray-200 dark:bg-gray-900">
                <Sidebar />

                <Tweets />

                <div className="w-96 h-screen sticky top-0   text-gray-200">
                    todo
                </div>
            </main>
        </div>
    );
}
