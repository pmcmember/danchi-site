import React from 'react'
import NextImage, { ImageProps } from 'next/image'
import DefaultImage from '@/assets/default-image.png'

type Props = Omit<ImageProps, 'layout' | 'src'> & { src?: ImageProps['src'] }

export const Image: React.FC<Props> = (props) => {
    const src: string =
        typeof props.src === 'string' ? props.src : (props.src as any).src
    return (
        <img
            {...props}
            src={src || DefaultImage.src}
            className={`object-cover absolute top-0 left-0 w-full h-full ${
                props.className || ''
            }`}
            // layout="fill"
        />
        // <NextImage
        //     {...props}
        //     src={props.src || DefaultImage}
        //     className={`object-cover ${props.className || ''}`}
        //     layout="fill"
        // />
    )
}
