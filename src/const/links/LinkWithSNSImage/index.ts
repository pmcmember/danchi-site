import { LinkAssociation, SNSLinkNames } from '../links.type'
import SoundCloudIcon from '@/assets/soundcloud-icon.png'
import TiktokIcon from '@/assets/tiktok-icon.png'
import TwitterIcon from '@/assets/twitter-icon.png'
import YoutubeIcon from '@/assets/youtube-icon.png'

const iconWidthSize = '40'
const iconHeightSize = '40'

type LinkWithSNSImageAttributes = {
    href: string
    img: {
        src: string
        width: string
        height: string
    }
}

const LinkWithSNSImage: LinkAssociation<
    SNSLinkNames,
    LinkWithSNSImageAttributes
> = new Map([
    [
        'soundcloud',
        {
            img: {
                src: SoundCloudIcon.src,
                width: iconWidthSize,
                height: iconHeightSize,
            },
            href: 'https://soundcloud.com/danchi-bgm',
        },
    ],
    [
        'tiktok',
        {
            img: {
                src: TiktokIcon.src,
                width: iconWidthSize,
                height: iconHeightSize,
            },
            href: 'https://www.tiktok.com/tag/danchi',
        },
    ],
    [
        'twitter',
        {
            img: {
                src: TwitterIcon.src,
                width: iconWidthSize,
                height: iconHeightSize,
            },
            href: 'https://twitter.com/DANCHi_YKHM',
        },
    ],
    [
        'youtube',
        {
            img: {
                src: YoutubeIcon.src,
                width: iconWidthSize,
                height: iconHeightSize,
            },
            href: 'https://www.youtube.com/channel/UCOMQvlBsJ3AqnkYeIdFSwaw',
        },
    ],
])

export default LinkWithSNSImage
