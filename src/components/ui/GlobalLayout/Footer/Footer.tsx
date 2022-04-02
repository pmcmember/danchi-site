import React from 'react';

import { ImageIcon } from '@/components/ui/ImageIcon';

import SoundCloudIcon from '@/assets/soundcloud-icon.png'
import TiktokIcon from '@/assets/tiktok-icon.png'
import TwitterIcon from '@/assets/twitter-icon.png'
import YoutubeIcon from '@/assets/youtube-icon.png'
import Link from 'next/link';

import { PageTitles } from '@/const/pages'


type Props = {
    style?: React.CSSProperties;
    className?: string;
}

export const Footer: React.VFC<Props> = ({style, className}) => {
    const iconWidthSize = "40"
    const iconHeightSize = "40"
    const snsInfo = [
        {
            icon: {
                src: SoundCloudIcon.src,
                width: iconWidthSize,
                height: iconHeightSize
            },
            href: "https://soundcloud.com/danchi-bgm"
        },
        {
            icon: {
                src: TiktokIcon.src,
                width: iconWidthSize,
                height: iconHeightSize
            },
            href: "https://www.tiktok.com/tag/danchi"
        },
        {
            icon: {
                src: TwitterIcon.src,
                width: iconWidthSize,
                height: iconHeightSize
            },
            href: "https://twitter.com/DANCHi_YKHM"
        },
        {
            icon: {
                src: YoutubeIcon.src,
                width: iconWidthSize,
                height: iconHeightSize
            },
            href: "https://www.youtube.com/channel/UCOMQvlBsJ3AqnkYeIdFSwaw"
        }
    ]



    return (
        <footer
            style={style}
            className={`bg-slate-800 ${className || ""}`}
        >
            <div className="py-10">
                <h2
                    className="bg-slate-300 text-center"
                    style={{
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "25px",
                        letterSpacing: "0.2em"
                    }}
                >
                    <Link href="/">
                        DANCHI
                    </Link>
                </h2>
            </div>
            <div className={`flex flex-col gap-3`}>
                {/* sns */}
                <nav>
                    <ul className={`flex mx-auto justify-center`}>
                        {snsInfo.map((sns) => (
                            <li className={`mx-2`} key={sns.href}>
                                <ImageIcon
                                    {...sns}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* pages */}
                <nav>
                    <ul className={`grid grid-cols-2 sm:mx-auto sm:my-5 sm:flex sm:justify-center`}>
                        {Array.from(PageTitles.keys())
                        .map((page) => (
                            <li className={`text-center text-slate-200 border-2 border-slate-100 sm:mx-2 sm:border-none`} key={page}>
                                <Link href={`/${page}`}>
                                    <a className="w-full inline-block">{PageTitles.get(page)}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={`text-center bg-black`} style={{height: "30px", marginTop: "20px"}} >
                <div className={`text-white`}>©DANCHI</div>
            </div>
        </footer>
    )
}