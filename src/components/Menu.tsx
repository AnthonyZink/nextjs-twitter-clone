import {
    faBell,
    faBookmark,
    faEllipsisH,
    faEnvelope,
    faHashtag,
    faHome,
    faListAlt,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";

const Menu = () => {
    return (
        <div className="space-y-3 flex flex-col">
            <MenuItem title="accueil" icon={faHome} active />
            <MenuItem title="explorer" icon={faHashtag} />
            <MenuItem title="notifications" icon={faBell} />
            <MenuItem title="Messages" icon={faEnvelope} />
            <MenuItem title="Signet" icon={faBookmark} />
            <MenuItem title="Listes" icon={faListAlt} />
            <MenuItem title="Profil" icon={faUser} />
            <MenuItem title="plus" icon={faEllipsisH} />
        </div>
    );
};

export default Menu;
