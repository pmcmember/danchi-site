import React from 'react'

import Link from 'next/link'

type Props = {
    icon: {
        src: string
        width: string
        height: string
    }
    href: string
    alt?: string
}

export const ImageIconButton: React.VFC<Props> = ({ icon, href, alt }) => {
    return (
        <Link href={href}>
            <a className="">
                <div className={`rounded-full`}>
                    {/* <Image
                        src={icon.src}
                        className={`rounded-full`}
                        height={icon.height}
                        width={icon.width}
                    /> */}
                    <img
                        src={icon.src}
                        className={`rounded-full`}
                        height={icon.height}
                        width={icon.width}
                        alt={alt}
                    />
                </div>
            </a>
        </Link>
    )
}
