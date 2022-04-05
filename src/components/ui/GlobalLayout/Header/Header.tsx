import React from 'react';

import styles from "./Header.module.css"

import { PageIcons, PageNames, PageTitles } from '@/const/pages'
import Link from 'next/link';
import { useRouter }from 'next/router';



type Props = {
    style?: React.CSSProperties;
    className?: string;
}

export const Header: React.VFC<Props> = ({style, className}) => {
    const contactPageName: PageNames = "contact"
    const ContactIcon = PageIcons.get(contactPageName)!;
    const currentPage = useRouter().pathname.split("/")[1] || "top";

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
            <div className="">
                <nav className="rmd:overflow-x-scroll">
                    <ul className={`flex items-center`}>
                        {Array.from(PageTitles.keys())
                        .map((page) => (
                            <li
                                className={`text-center flex-shrink-0 flex-grow bg-white`}
                                key={page}
                            >
                                <Link href={`/${page}`}>
                                    <a className={`${currentPage === page?"bg-slate-50" : ""} hover:bg-slate-100 duration-300 w-full px-5 border-x border-x-slate-300 flex justify-center items-center`}>
                                        <span className="mr-2">
                                            {(() => {
                                                const Icon = PageIcons.get(page);
                                                return Icon? <Icon/>: "";
                                            })()}
                                        </span>
                                        {PageTitles.get(page)}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}


