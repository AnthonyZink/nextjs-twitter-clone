import {
    faCalendarAlt,
    faCameraRetro,
    faGlobeEurope,
    faGrin,
    faStream,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "./CircularProgressBar";
import { useState } from "react";
import classNames from "classnames";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

export default function WriteTweet({ addTweetParent }) {
    const [charactersValue, setCharactersValue] = useState("0");
    const [tweetButtonDisabled, setTweetButtonDisabled] = useState(true);
    const [tweetContent, setTweetContent] = useState("");

    const addTweetQuery = gql`
        mutation addTweet($content: String, $userId: String) {
            addTweet(content: $content, userId: $userId) {
                id
                content
                user {
                    twitterId
                    username
                }
                createdAt
            }
        }
    `;

    const [addTweet, { data }] = useMutation(addTweetQuery);

    const handleClick = async () => {
        const tweet = await addTweet({
            variables: {
                content: tweetContent,
                userId: "b98fe261-30e1-4f16-b741-efe55923404e",
            },
        });
        addTweetParent(tweet.data.addTweet);

        setTweetContent("");
        setTweetButtonDisabled(true);
        setCharactersValue("0");
    };

    const checkCharacterCount = (characters) => {
        return {
            count: characters.length,
            overflow: characters.length - 280 > 0 ? characters.length - 280 : 0,
        };
    };

    const handleChange = ({ target }) => {
        target.style.height = target.scrollHeight + "px";
        const { count, overflow } = checkCharacterCount(target.value);
        setTweetContent(target.value);

        // Si on a un overflow ou qu'on a 0 caractères on disabled le bouton de tweet
        if ((overflow > 0 && !tweetButtonDisabled) || count === 0) {
            setTweetButtonDisabled(true);
        } else if (tweetButtonDisabled && overflow <= 0) {
            setTweetButtonDisabled(false);
        }

        setCharactersValue(count);
    };

    const tweetButtonClasses = classNames({
        "px-4 h-10 flex items-center justify-center rounded-full font-bold cursor-pointer transition-colors duration-150 ease-out text-white bg-blue-400 hover:bg-blue-500 ":
            true,
        "disabled:hover:bg-blue-400 disabled:opacity-50 disabled:cursor-default":
            tweetButtonDisabled,
    });

    return (
        <div className="px-4 py-2 dark:text-gray-200 flex space-x-5">
            <div className="flex">
                <img
                    src="https://pbs.twimg.com/profile_images/1095765031206248448/xaYbtnVQ_x96.png"
                    alt=""
                    className="rounded-full h-12 w-12"
                />
            </div>
            <div className="flex-grow">
                <div>
                    <textarea
                        onChange={handleChange}
                        value={tweetContent}
                        placeholder="Quoi de neuf ?"
                        className="w-full dark:bg-gray-900 resize-none overflow-hidden text-xl placeholder-gray-500 py-2 outline-none h-auto"
                    ></textarea>
                    <div className="border-b dark:border-grayBorder w-full">
                        <div className="text-blue-400 inline-flex text-sm space-x-2 font-semibold pb-3 cursor-pointer">
                            <FontAwesomeIcon
                                icon={faGlobeEurope}
                                className="h-5 w-5"
                            />
                            <div className="">Tous le monde peut répondre</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-1">
                        <div className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-full transition duration-150 ease-out">
                            <FontAwesomeIcon
                                icon={faCameraRetro}
                                className="h-5 w-5 text-blue-400 "
                            />
                        </div>
                        <div className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-full transition duration-150 ease-out">
                            <FontAwesomeIcon
                                icon={faStream}
                                className="h-5 w-5 text-blue-400"
                            />
                        </div>
                        <div className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-full transition duration-150 ease-out">
                            <FontAwesomeIcon
                                icon={faGrin}
                                className="h-5 w-5 text-blue-400"
                            />
                        </div>
                        <div className="cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-full transition duration-150 ease-out">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="h-5 w-5 text-blue-400"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {parseInt(charactersValue) > 0 && (
                            <CircularProgressBar
                                sqSize="30"
                                strokeWidth="2"
                                max="280"
                                value={charactersValue}
                            />
                        )}
                        <button
                            disabled={tweetButtonDisabled}
                            className={tweetButtonClasses}
                            onClick={handleClick}
                        >
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
