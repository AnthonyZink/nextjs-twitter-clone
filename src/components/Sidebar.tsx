import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisH, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";

const Sidebar = () => {
    return (
        <div className="h-screen sticky top-0  flex justify-end max-w-60 ">
            <div className=" h-full px-4 py-2 flex flex-col justify-between items-center">
                <div className=" space-y-2 ">
                    <div className="p-2">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="h-7 w-7 dark:text-gray-200 text-blue-400 cursor-pointer"
                        />
                    </div>
                    <Menu />

                    <div className="cursor-pointer transition-colors duration-150 ease-out hidden xl:block bg-blue-400 hover:bg-blue-500 capitalize font-bold text-white py-3 rounded-full text-center">
                        tweet
                    </div>

                    <div className=" cursor-pointer transition-colors duration-150 ease-out xl:hidden inline-flex bg-blue-400 hover:bg-blue-500 capitalize font-bold text-white p-3 rounded-full text-center">
                        <FontAwesomeIcon icon={faPlus} className="h-5 w-5" />
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
                        <div className="hidden xl:block">
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
                        className="dark:text-gray-200 text-gray-800 h-3 hidden xl:block"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
