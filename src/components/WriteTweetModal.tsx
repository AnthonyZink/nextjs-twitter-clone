import { useState } from "react";
import WriteTweet from "./WriteTweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

export default function WriteTweetModal() {
    const dispatch = useDispatch();

    const closeTweetModal = () => {
        dispatch({
            type: "CLOSE_WRITE_TWEET_MODAL",
        });
    };
    return (
        <>
            <div className="justify-center pt-24 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-10">
                <div className="relative mx-auto w-1/2">
                    {/*content*/}
                    <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-black text-gray-200 outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-between py-1 px-3 border-b dark:border-grayBorder rounded-t">
                            <div
                                onClick={closeTweetModal}
                                className="text-3xl text-blue-400 rounded-full p-2 transition duration-150 ease-out hover:bg-blue-500 hover:bg-opacity-20 block outline-none focus:outline-none cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="h-4 w-4"
                                />
                            </div>
                        </div>
                        {/*body*/}
                        <div className="relative flex-auto">
                            <WriteTweet />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
