import React from 'react';

import styles from "./Header.module.css"

import { PageIcons, PageNames, PageTitles } from '@/const/pages'
import Link from 'next/link';
import { useRouter }from 'next/router';



type Props = {
    style?: React.CSSProperties;
    className?: string;
    isHide: boolean
}

export const Header: React.VFC<Props> = ({style, className, isHide}) => {
    const currentPage = useRouter().pathname.split("/")[1] || "top";

    return (
        <header
            style={{transform: `${isHide ? "translateY(-150%)" : "translateY(0)"}`, transition: ".4s"}}
            className={`${styles.header} ${className || ""}`}
        >
            <div className={styles.content}>
                {/* <div className={styles.content__left}>
                    <SNS snsInfo={snsInfo}/>
                </div> */}
                <h1 className={styles.content__center}>
                    <Link href="/">
                        <a>DANCHi</a>
                    </Link>
                </h1>
                <div className={styles.content__right}>
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