import { PageAssociation } from "../page.type";
import { IconType } from 'react-icons';
import {
    FaEnvelope,
    FaMicroblog,
    FaFilm,
    FaHeadphones,
    FaHome
} from 'react-icons/fa';

const icons: PageAssociation<IconType> = new Map([
    ["top", FaHome],
    ["musics", FaHeadphones],
    ["videos", FaFilm],
    ["blogs", FaMicroblog],
    ["contact", FaEnvelope],
]);

export default icons;