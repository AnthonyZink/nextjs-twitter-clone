import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faComment,
    faEllipsisH,
    faHeart,
    faRandom,
    faUpload,
} from "@fortawesome/free-solid-svg-icons";

import * as timeago from "timeago.js";
import Link from "next/link";

export default function Tweet({ tweet }) {
    return (
        <div className="flex space-x-3 border-b dark:border-grayBorder px-4 py-4 dark:hover:bg-black dark:hover:bg-opacity-20 hover:bg-gray-100 cursor-pointer transition duration-150 ease-out w-full">
            {" "}
            <img
                src="https://pbs.twimg.com/profile_images/1095765031206248448/xaYbtnVQ_x96.png"
                alt=""
                className="rounded-full h-12 w-12"
            />
            <div className="dark:text-gray-200 text-gray-800 space-y-2 w-full">
                {/* Header */}
                <div className="flex justify-between group">
                    <Link href="/AnthonyZink11">
                        <a className="flex items-center space-x-1 font-semibold">
                            <span className="group-hover:underline">
                                {tweet.user.username}
                            </span>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="h-4 w-4 text-blue-400 dark:text-gray-200"
                            />
                            <div className="text-gray-500 text-sm space-x-1 font-normal">
                                <span>@{tweet.user.twitterId}</span>
                                <span>·</span>
                                <span>
                                    {timeago
                                        .format(tweet.createdAt)
                                        .slice(0, -4)}
                                </span>
                            </div>
                        </a>
                    </Link>

                    <FontAwesomeIcon
                        icon={faEllipsisH}
                        className="h-4 w-4 text-gray-500"
                    />
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <span>
                        {tweet.content}
                        {/* High winds are reported to have broken a glass-bottomed
                        bridge in China, leaving a man clinging to a handrail
                        above a 91-metre drop. Should we avoid walking on glass? */}
                    </span>
                    {tweet.image && (
                        <img
                            src="/images/bridge.jpeg"
                            alt=""
                            className="rounded-2xl"
                        />
                    )}
                </div>

                {/* Icons */}
                <div className="grid grid-cols-4">
                    <div className="">
                        <div className="inline-flex space-x-4 items-center text-gray-500 group">
                            <FontAwesomeIcon
                                icon={faComment}
                                className="h-4 w-4 group-hover:text-blue-500 transition-colors duration-150 ease-out"
                            />
                            <span className="text-sm group-hover:text-blue-500 transition-colors duration-150 ease-out">
                                10
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex space-x-4 items-center text-gray-500 group">
                            <FontAwesomeIcon
                                icon={faRandom}
                                className="h-4 w-4 group-hover:text-blue-500 transition-colors duration-150 ease-out"
                            />
                            <span className="text-sm group-hover:text-blue-500 transition-colors duration-150 ease-out">
                                18
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="inline-flex space-x-4 items-center text-gray-500 group">
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="h-4 w-4 group-hover:text-blue-500 transition-colors duration-150 ease-out"
                            />
                            <span className="text-sm group-hover:text-blue-500 transition-colors duration-150 ease-out">
                                93
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="inline-flex space-x-4 items-center text-gray-500 group">
                            <FontAwesomeIcon
                                icon={faUpload}
                                className="h-4 w-4 group-hover:text-blue-500 transition-colors duration-150 ease-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
