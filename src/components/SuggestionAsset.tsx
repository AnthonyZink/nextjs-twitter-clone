import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SuggestionAsset = () => {
    return (
        <div className="py-3 px-4 border-b border-grayBorder flex items-center space-x-3 hover:bg-gray-900 hover:bg-opacity-10 cursor-pointer">
            <img
                src="https://pbs.twimg.com/profile_images/1204432464053231616/ewCSVa0O_normal.jpg"
                className="rounded-full"
                alt=""
            />

            <div>
                <div className="font-bold hover:underline">Nothing2All</div>
                <div className="text-gray-500">@Nothing_2_All</div>
            </div>
            <div className="flex justify-end w-full">
                <div className="border border-blue-400 text-blue-400 font-semibold rounded-full px-4 py-1">
                    Suivre
                </div>
            </div>
        </div>
    );
};

export default SuggestionAsset;
