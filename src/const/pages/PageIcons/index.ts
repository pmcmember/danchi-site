import { PageAssociation } from '../pages.type'
import { IconType } from 'react-icons'
import {
    FaEnvelope,
    FaMicroblog,
    FaFilm,
    FaHeadphones,
    FaHome,
} from 'react-icons/fa'

export const PageIcons: PageAssociation<IconType> = new Map([
    ['top', FaHome],
    ['musics', FaHeadphones],
    ['videos', FaFilm],
    ['blogs', FaMicroblog],
    ['contact', FaEnvelope],
])
