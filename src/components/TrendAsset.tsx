import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TrendAsset = () => {
    return (
        <div className="py-3 px-4 border-b border-grayBorder hover:bg-gray-900 hover:bg-opacity-10 cursor-pointer">
            <div className="text-sm text-gray-500 flex items-center justify-between">
                <div className="font-light">
                    Tendance dans la catégorie France
                </div>
                <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="h-4 w-4 text-gray-500"
                />
            </div>
            <div className="font-bold">Elon Lusk</div>
            <div className="text-sm font-light text-gray-500">105 k Tweets</div>
        </div>
    );
};

export default TrendAsset;
