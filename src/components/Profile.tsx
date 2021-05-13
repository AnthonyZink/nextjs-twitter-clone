import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faCalendar,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Tweet from "./Tweet";
import Link from "next/link";

const Profile = () => {
    return (
        <div className="flex-1 dark:border-grayBorder border-r border-l max-w-xl">
            {/* Header */}
            <div className="flex items-center space-x-10 h-14 px-5 dark:border-grayBorder border-b">
                <Link href="/">
                    <a className="transition duration-150 ease-out hover:bg-blue-500 hover:bg-opacity-5 hover:text-blue-400 rounded-full p-2">
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="h-5 w-5 dark:text-blue-400 "
                        />
                    </a>
                </Link>

                <div className="dark:text-gray-200 capitalize font-bold text-xl">
                    <div>Anthony Zink</div>
                    <div className="text-sm text-gray-500 font-light">
                        19 tweets
                    </div>
                </div>
            </div>

            {/* Bio */}
            <div className="w-full dark:text-gray-200">
                <img
                    src="https://pbs.twimg.com/profile_banners/983773468809465856/1620919218/1500x500"
                    className="w-full"
                />
                <div className="flex items-end justify-between -mt-14 px-4">
                    <img
                        src="https://pbs.twimg.com/profile_images/1095765031206248448/xaYbtnVQ_400x400.png"
                        className="rounded-full border-solid dark:border-gray-900 border-white border-4 -mt-3 h-32 w-32"
                    />
                    <div className="border border-blue-400 text-blue-400 font-semibold rounded-full px-4 py-1 mb-3 cursor-pointer">
                        Éditer le profil
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="px-4">
                        <h3 className="font-bold text-lg">Anthony Zink</h3>
                        <p className="text-sm text-gray-500">@AnthonyZink11</p>
                    </div>
                    <div className="px-4 text-gray-500 font-light flex items-center space-x-2">
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="h-4 w-4"
                        />
                        <span>A rejoint Twitter en 2018</span>
                    </div>
                    <div className="px-4 flex items-center space-x-4 font-bold">
                        <div>
                            38{" "}
                            <span className="text-gray-500 font-normal">
                                abonnements
                            </span>
                        </div>
                        <div>
                            4{" "}
                            <span className="text-gray-500 font-normal">
                                abonnés
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className="flex text-gray-600 font-bold border-b dark:border-grayBorder">
                <div className="p-3 flex-grow text-center text-blue-400 border-b-2 border-blue-400">
                    Tweets
                </div>
                <div className="p-3 flex-grow text-center transition duration-150 ease-out hover:bg-blue-500 hover:bg-opacity-5 hover:text-blue-400 cursor-pointer">
                    Tweets et réponses
                </div>
                <div className="p-3 flex-grow text-center transition duration-150 ease-out hover:bg-blue-500 hover:bg-opacity-5 hover:text-blue-400 cursor-pointer">
                    Médias
                </div>
                <div className="p-3 flex-grow text-center transition duration-150 ease-out hover:bg-blue-500 hover:bg-opacity-5 hover:text-blue-400 cursor-pointer">
                    J'aime
                </div>
            </div>

            {/* Tweets */}
            <div className="flex">
                <div className="flex-1">
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </div>
            </div>
        </div>
    );
};

export default Profile;
