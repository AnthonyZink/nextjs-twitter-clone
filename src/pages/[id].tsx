import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Assets from "../components/Assets";
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
