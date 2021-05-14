import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tweet from "./Tweet";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import WriteTweet from "./WriteTweet";

const Tweets = ({ tweets }) => {
    return (
        <div className="flex-1 dark:border-grayBorder border-r border-l max-w-xl">
            {/* Header */}
            <div className="flex justify-between items-center h-14 px-5 dark:border-grayBorder border-b">
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

            <div className="h-3 dark:bg-gray-800 bg-gray-100 dark:border-grayBorder border-t border-b"></div>

            <div className="flex">
                <div className="flex-1">
                    {tweets?.map((tweet) => (
                        <Tweet key={tweet.id} tweet={tweet} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tweets;
