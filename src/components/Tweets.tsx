import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tweet from "./Tweet";

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
import WriteTweet from "./WriteTweet";
const Tweets = () => {
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

            {/* Write tweet */}
            <WriteTweet />

            <div className="h-3 bg-gray-800 border-grayBorder border-t border-b"></div>

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

export default Tweets;
