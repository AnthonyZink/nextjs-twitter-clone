import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Assets from "../components/Assets";
import { useRouter } from "next/dist/client/router";
import Tweet from "../components/Tweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Profile from "../components/Profile";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Twitter clone app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex justify-center bg-white dark:bg-gray-900">
                <Sidebar />

                <Profile />

                <Assets />
            </main>
        </div>
    );
}
