import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";

const MenuItem = ({ title, icon, active = false }) => {
    var btnClass = classNames({
        "transition duration-150 ease-out hover:bg-blue-500 hover:bg-opacity-5 hover:text-blue-400 flex items-center space-x-4 cursor-pointer rounded-full p-2 xl:pr-5 capitalize font-semibold dark:text-gray-200":
            true,
        "dark:text-blue-400 text-blue-400": active,
    });

    return (
        <Link href="/">
            <a className={btnClass}>
                <FontAwesomeIcon icon={icon} className="h-6 w-6" />
                <div className="text-xl hidden xl:block">{title}</div>
            </a>
        </Link>
    );
};

export default MenuItem;
