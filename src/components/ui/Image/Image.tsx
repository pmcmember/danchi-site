import React from 'react'
import NextImage, { ImageProps } from 'next/image'
import DefaultImage from '@/assets/default-image.png'

type Props = Omit<ImageProps, 'layout'>

export const Image: React.FC<Props> = (props) => {
    return (
        <NextImage
            {...props}
            src={props.src || DefaultImage}
            className="object-cover"
            layout="fill"
        />
    )
}
