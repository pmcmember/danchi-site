import React from 'react';

import { ImageIconButton } from '@/components/ui/Buttons';

import Link from 'next/link';

import { PageTitles } from '@/const/pages'
import { LinkWithSNSImage } from '@/const/links';


type Props = {
    style?: React.CSSProperties;
    className?: string;
}

export const Footer: React.VFC<Props> = ({style, className}) => {
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
                        {Array.from(LinkWithSNSImage.keys()).map((key) => {
                            const sns = LinkWithSNSImage.get(key)!
                            return (
                                <li className={`mx-2`} key={key}>
                                    <ImageIconButton
                                        icon={sns.img}
                                        href={sns.href}
                                    />
                                </li>
                            )
                        })}
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