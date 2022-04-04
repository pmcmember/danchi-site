import { SNSLinkNames, LinkAssociation } from "../links.type"
import { IconType } from "react-icons"
import { GrSoundcloud, GrTwitter, GrYoutube } from 'react-icons/gr'
import { FaTiktok } from 'react-icons/fa'


type LinkWithSNSIconAttributes = {
    href: string;
    Icon: IconType
}

const LinkWithSNSIcon: LinkAssociation<SNSLinkNames, LinkWithSNSIconAttributes> = new Map([
    ["soundcloud", {
        Icon: GrSoundcloud,
        href: "https://soundcloud.com/danchi-bgm"
    }],
    ["tiktok", {
        Icon: FaTiktok,
        href: "https://www.tiktok.com/tag/danchi"
    }],
    ["twitter", {
        Icon: GrTwitter,
        href: "https://twitter.com/DANCHi_YKHM"
    }],
    ["youtube", {
        Icon: GrYoutube,
        href: "https://www.youtube.com/channel/UCOMQvlBsJ3AqnkYeIdFSwaw"
    }]
])

export default LinkWithSNSIcon