import { faCog, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchTweet from "./SearchTweet";
import TrendAsset from "./TrendAsset";
import SuggestionAsset from "./SuggestionAsset";
const Assets = () => {
    return (
        <div className="w-96 h-screen sticky top-0 px-7 py-2 space-y-4 dark:text-gray-200">
            <SearchTweet />

            <div className="bg-gray-100 dark:bg-white dark:bg-opacity-5 rounded-2xl">
                <div className="py-3 px-4 text-xl font-bold flex justify-between items-center border-b dark:border-grayBorder">
                    <div>Tendance pour vous</div>
                    <FontAwesomeIcon
                        icon={faCog}
                        className="h-4 w-4 text-blue-400"
                    />
                </div>
                <TrendAsset />
                <TrendAsset />
                <TrendAsset />
                <div className="py-3 px-4 text-blue-400 rounded-b-2xl dark:hover:bg-gray-900 dark:hover:bg-opacity-10 hover:bg-gray-200 cursor-pointer transition duration-150 ease-out">
                    Voir plus
                </div>
            </div>

            <div className="bg-gray-100 dark:bg-white dark:bg-opacity-5 rounded-2xl">
                <div className="py-3 px-4 text-xl font-bold flex justify-between items-center border-b dark:border-grayBorder">
                    <div>Suggestions</div>
                </div>
                <SuggestionAsset />
                <div className="py-3 px-4 text-blue-400 rounded-b-2xl dark:hover:bg-gray-900 dark:hover:bg-opacity-10 hover:bg-gray-200 cursor-pointer transition duration-150 ease-out">
                    Voir plus
                </div>
            </div>
        </div>
    );
};

export default Assets;
