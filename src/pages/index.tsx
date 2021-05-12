import Head from "next/head";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
    const tweets = [];

    for (let i = 0; i < 150; i++) {
        tweets.push(<div className="text-gray-200">Je suis un tweet</div>);
    }

    return (
        <div>
            <Head>
                <title>Twitter clone app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex bg-gray-200 dark:bg-gray-900">
                <Sidebar />
                <div className="flex-1 flex border-gray-400 border-r border-l">
                    <div className="px-6 py-4 flex-1">
                        {tweets.map((tweet) => tweet)}
                    </div>
                </div>

                <div className="w-96 h-screen sticky top-0   text-gray-200">
                    todo
                </div>
            </main>
        </div>
    );
}
