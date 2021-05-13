import { faCog, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchTweet from "./SearchTweet";
import TrendAsset from "./TrendAsset";
import SuggestionAsset from "./SuggestionAsset";
const Assets = () => {
    return (
        <div className="w-96 h-screen sticky top-0 px-7 py-2 space-y-4 text-gray-200">
            <SearchTweet />

            <div className="dark:bg-white dark:bg-opacity-5 rounded-2xl">
                <div className="py-3 px-4 text-xl font-bold flex justify-between items-center border-b border-grayBorder">
                    <div>Tendance pour vous</div>
                    <FontAwesomeIcon
                        icon={faCog}
                        className="h-4 w-4 text-blue-400"
                    />
                </div>
                <TrendAsset />
                <TrendAsset />
                <TrendAsset />
                <div className="py-3 px-4 text-blue-400 hover:bg-gray-900 hover:bg-opacity-10 cursor-pointer">
                    Voir plus
                </div>
            </div>

            <div className="dark:bg-white dark:bg-opacity-5 rounded-2xl">
                <div className="py-3 px-4 text-xl font-bold flex justify-between items-center border-b border-grayBorder">
                    <div>Suggestions</div>
                </div>
                <SuggestionAsset />
                <div className="py-3 px-4 text-blue-400 hover:bg-gray-900 hover:bg-opacity-10 cursor-pointer">
                    Voir plus
                </div>
            </div>
        </div>
    );
};

export default Assets;
