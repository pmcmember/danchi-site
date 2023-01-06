import { PageAssociation } from '../pages.type'
import { IconType } from 'react-icons'
import {
    FaEnvelope,
    FaFilm,
    FaHeadphones,
    FaHome,
    FaMicroblog,
} from 'react-icons/fa'

export const PageIcons: PageAssociation<IconType> = new Map([
    ['top', FaHome],
    ['musics', FaHeadphones],
    ['videos', FaFilm],
    ['blogs', FaMicroblog],
    ['contact', FaEnvelope],
])
