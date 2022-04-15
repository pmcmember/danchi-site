import React from 'react';
import Link from 'next/link';

import styles from './ResponsiveCard.module.css';
import { MicroCMSImage } from 'microcms-js-sdk'
import { BlogsSchema } from '@/api/@types'
import { DefaultImage } from '@/const/images';

type Props = {
    image: BlogsSchema["image"];
    title: BlogsSchema["title"];
    description: BlogsSchema["description"];
    tags?: BlogsSchema["tags"];
    href: string;
}

export const ResponsiveCard: React.VFC<Props> = ({image, title, description, tags, href}) => {
    return (
        <article className="text-xl inline-block hover:opacity-80 duration-300">
            <Link href={href}>
                <a>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white rsm:max-w-full">
                        <div className={`${styles.cardImageWrapper} ${styles.rsmWidth50px}`}>
                            <img
                                className={`w-full h-auto ${styles.cardImageContent}`}
                                src={image?.url || DefaultImage.src}
                            />
                        </div>
                        <div className="relative bg-white">
                            <div className="px-6 py-4 rsm:pl-4 rsm:pr-2">
                                <div className="font-bold text-xl mb-2">{title}</div>
                                <p className="text-gray-700 text-base">{description}</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {tags ? (
                                    tags?.map((tag) => (
                                    <Budge key={tag.tag}>{tag.tag}</Budge>
                                    ))
                                ) : (
                                    <div style={{fontSize: "10px"}}>タグ無し</div>
                                )}
                            </div>
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