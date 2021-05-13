import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchTweet = () => {
    return (
        <div className="flex items-center bg-gray-200 dark:bg-white dark:bg-opacity-5 w-full rounded-full px-4 py-2 space-x-5 border border-transparent text-gray-500 focus-within:border-blue-400 focus-within:text-blue-400">
            <FontAwesomeIcon
                icon={faSearch}
                className="h-4 w-4 text-current "
            />
            <input
                type="text"
                placeholder="Recherche Twitter"
                className="bg-transparent placeholder-gray-500 h-full py-2 text-gray-200 outline-none"
            />
        </div>
    );
};

export default SearchTweet;
