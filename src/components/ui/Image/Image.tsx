import React from 'react'
import { ImageProps, StaticImageData } from 'next/image'
import DefaultImage from '@/assets/default-image.png'

type Props = Omit<ImageProps, 'layout' | 'src'> & {
    src?: string | StaticImageData
    alt?: string
}

export const Image: React.FC<Props> = (props) => {
    const src: string = !props.src
        ? DefaultImage.src
        : typeof props.src === 'string'
        ? props.src
        : props.src.src
    return (
        <img
            {...props}
            src={src}
            className={`object-cover absolute top-0 left-0 w-full h-full ${
                props.className || ''
            }`}
            alt={props.alt}
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
