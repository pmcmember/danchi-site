import React from 'react';

import styles from "./Header.module.css"

import { PageIcons } from '@/const/pages'


import Link from 'next/link';

type Props = {
    style?: React.CSSProperties;
    className?: string;
}

export const Header: React.VFC<Props> = ({style, className}) => {
    const contactPageName = "contact"
    const ContactIcon = PageIcons.get(contactPageName)!
    return (
        <header
            style={style}
            className={`${styles.header} ${className || ""}`}
        >
            <div className={styles.content}>
                {/* <div className={styles.content__left}>
                    <SNS snsInfo={snsInfo}/>
                </div> */}
                <h1 className={styles.content__center}>
                    <Link href="/">
                        <a>DANCHI</a>
                    </Link>
                </h1>
                <div className={styles.content__right}>
                    <div className={styles.playBotton}>
                        <Link href={`/${contactPageName}`}>
                            <a>
                                <ContactIcon/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}


