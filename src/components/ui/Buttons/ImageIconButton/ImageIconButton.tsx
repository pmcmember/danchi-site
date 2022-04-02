import React from 'react'

import styles from './ImageIcon.module.css';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
    icon: {
        src: string;
        width: string;
        height: string;
    };
    href: string;
}

export const ImageIcon: React.VFC<Props> = ({icon, href}) => {
    return (
        <Link href={href}>
            <div
                className={`rounded-full`}
            >
                <Image
                    src={icon.src}
                    className={`rounded-full`}
                    height={icon.height}
                    width={icon.width}
                />
            </div>
        </Link>
    )
}