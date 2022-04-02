import React from 'react';
import Link from 'next/link';

import styles from './ResponsiveCard.module.css';

type Props = {
    img: {
        src: string;
        alt: string;
    };
    title: string;
    description: string;
    tags?: string[];
    href: string;
}

export const ResponsiveCard: React.VFC<Props> = ({img, title, description, tags, href}) => {
    return (
        <article>
            <Link href={href}>
                <a>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white rsm:max-w-full rsm:flex">
                        <div className={`aspect-video w-full rsm:aspect-square rsm:h-full rsm:w-full rsm:flex-1 ${styles.rsmWidth50px}`}>
                            <div className="overflow-hidden h-full w-full bg-cover" style={{backgroundImage: `url(${img.src})`}}/>
                        </div>
                        <div className="px-6 py-4 rsm:pl-4 rsm:pr-2 rsm:flex-2">
                            <div className="font-bold text-xl mb-2 line-clamp-1">{title}</div>
                            <p className="text-gray-700 text-base line-clamp-3">{description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2 rsm:px-2 rsm:flex-1">
                            {tags?.map((tag) => (
                                <Budge key={tag}>{tag}</Budge>
                            ))}
                        </div>
                    </div>
                </a>
            </Link>
        </article>
    )
}

const Budge: React.VFC<{children: React.ReactNode}> = ({children}) => {
    return (
        <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{children}</span>
    )
}