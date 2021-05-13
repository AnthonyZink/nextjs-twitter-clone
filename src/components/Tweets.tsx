import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faCameraRetro,
    faGlobeEurope,
    faGrin,
    faGrinAlt,
    faImage,
    faStar,
    faStream,
} from "@fortawesome/free-solid-svg-icons";
const Tweets = () => {
    const tweets = [];

    for (let i = 0; i < 150; i++) {
        tweets.push(<div className="text-gray-200">Je suis un tweet</div>);
    }

    return (
        <div className="flex-1 border-grayBorder border-r border-l ">
            {/* Header */}
            <div className="flex justify-between items-center h-14 px-5 border-grayBorder border-b">
                <div className="dark:text-gray-200 capitalize font-bold text-xl">
                    Accueil
                </div>
                <FontAwesomeIcon
                    icon={faStar}
                    className="h-6 w-6 text-blue-400"
                />
            </div>

            {/* Create tweet */}
            <div className="px-4 py-2 dark:text-gray-200 flex space-x-5">
                <div className="flex">
                    <img
                        src="https://pbs.twimg.com/profile_images/1095765031206248448/xaYbtnVQ_x96.png"
                        alt=""
                        className="rounded-full h-12 w-12"
                    />
                </div>
                <div className="flex-grow">
                    <div>
                        <textarea
                            placeholder="Quoi de neuf ?"
                            className="w-full dark:bg-gray-900 resize-none text-xl placeholder-gray-500 py-2 outline-none"
                        ></textarea>
                        <div className="border-b border-grayBorder w-full">
                            <div className="text-blue-400 inline-flex text-sm space-x-2 font-semibold pb-3 cursor-pointer">
                                <FontAwesomeIcon
                                    icon={faGlobeEurope}
                                    className="h-5 w-5"
                                />
                                <div className="">
                                    Tous le monde peut répondre
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="flex space-x-1">
                            <div className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-full transition duration-150 ease-out">
                                <FontAwesomeIcon
                                    icon={faCameraRetro}
                                    className="h-5 w-5 text-blue-400 "
                                />
                            </div>
                            <div className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-full transition duration-150 ease-out">
                                <FontAwesomeIcon
                                    icon={faStream}
                                    className="h-5 w-5 text-blue-400"
                                />
                            </div>
                            <div className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-full transition duration-150 ease-out">
                                <FontAwesomeIcon
                                    icon={faGrin}
                                    className="h-5 w-5 text-blue-400"
                                />
                            </div>
                            <div className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-full transition duration-150 ease-out">
                                <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                    className="h-5 w-5 text-blue-400"
                                />
                            </div>
                        </div>
                        <div className="px-4 h-10 flex items-center rounded-full font-bold cursor-pointer transition-colors duration-150 ease-out  bg-blue-400 hover:bg-blue-500">
                            Tweet
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-3 bg-gray-800"></div>

            <div className="flex">
                <div className="px-6 py-4 flex-1">
                    {tweets.map((tweet) => tweet)}
                </div>
            </div>
        </div>
    );
};

export default Tweets;
