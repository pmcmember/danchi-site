import React from 'react';

import styles from "./Header.module.css"

import SoundCloudIcon from '@/assets/soundcloud-icon.png'
import TiktokIcon from '@/assets/tiktok-icon.png'
import TwitterIcon from '@/assets/twitter-icon.png'
import YoutubeIcon from '@/assets/youtube-icon.png'


import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type Props = {
    style?: React.CSSProperties;
    className?: string;
}

export const Header: React.VFC<Props> = ({style, className}) => {
    const snsInfo: SNSProps['snsInfo'] = [
        {
            icon: SoundCloudIcon.src,
            href: "https://soundcloud.com/danchi-bgm"
        },
        {
            icon: TiktokIcon.src,
            href: "https://www.tiktok.com/tag/danchi"
        },
        {
            icon: TwitterIcon.src,
            href: "https://mobile.twitter.com/danchirooms"
        },
        {
            icon: YoutubeIcon.src,
            href: "https://www.youtube.com/channel/UCOMQvlBsJ3AqnkYeIdFSwaw"
        }
    ]


    return (
        <header
            style={style}
            className={`${styles.header} ${className || ""}`}
        >
            <div className={styles.content}>
                <div className={styles.content__left}>
                    <SNS snsInfo={snsInfo}/>
                </div>
                <h1 className={styles.content__center}>
                    <Link href="/">
                        DANCHI
                    </Link>
                </h1>
                <div className={styles.content__right}>
                    <div className={styles.playBotton}>
                        play
                    </div>
                </div>
            </div>
        </header>
    )
}


type SNSProps = {
    snsInfo: {
        icon: string;
        href: string;
    }[]
}

const SNS: React.VFC<SNSProps> = ({snsInfo}) => {
    return (
        <div className={styles.sns}>
            {snsInfo.map((s) => (
                <div
                    className={styles.sns__iconWrap}
                >
                    <Link href={s.href}>
                        <Image
                            src={s.icon}
                            className={styles.sns__icon}
                            height="30"
                            width="30"
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}