import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";

const Sidebar = () => {
    return (
        <div className="w-96 h-screen sticky top-0  flex justify-end bg-gray-200 dark:bg-gray-900 border-gray-500">
            <div className=" h-full px-4 py-2 flex flex-col justify-between">
                <div className=" space-y-2 ">
                    <div className="p-2">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="h-7 w-7 dark:text-gray-200 cursor-pointer"
                        />
                    </div>
                    <Menu />

                    <div className="w-60 cursor-pointer transition-colors duration-150 ease-out  bg-blue-400 hover:bg-blue-500 capitalize font-bold text-gray-200 py-3 rounded-full text-center">
                        tweet
                    </div>
                </div>

                {/* User */}
                <div className="flex items-center justify-between transition duration-150 ease-out hover:bg-blue-500 hover:bg-opacity-5 cursor-pointer rounded-full p-3">
                    <div className="flex space-x-3 items-center">
                        <img
                            src="https://pbs.twimg.com/profile_images/1095765031206248448/xaYbtnVQ_x96.png"
                            alt=""
                            className="rounded-full h-10 w-10"
                        />
                        <div>
                            <div className="dark:text-gray-200 text-gray-800">
                                Anthony Zink
                            </div>
                            <div className="text-gray-500 text-md">
                                @AnthonyZink11
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon
                        icon={faEllipsisH}
                        className="dark:text-gray-200 text-gray-800 h-3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
