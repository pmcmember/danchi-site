import React from 'react'
import styles from './Top.module.css'
import { Image } from '@/components/ui/Image'

type HeroImage = {
    src: string
    title: string
}

export const HeroImage: React.FC<HeroImage> = ({ src, title }) => (
    <div className={styles.hiroImage}>
        <div className={styles.hiroImage__textWrap}>
            <h2 className={styles.hiroImage__title}>{title}</h2>
        </div>
        <Image src={src} />
    </div>
)

type Profile = {
    imgSrc: string
    title: string
    profileText: string
}

export const Profile: React.FC<Profile> = ({ imgSrc, title, profileText }) => (
    <div className={styles.profile}>
        <div className={styles.profile__left}>
            <h2 className={styles.profile__title}>{title}</h2>
            <div className={styles.profile__text}>{profileText}</div>
        </div>
        <div className={styles.profile__partition}></div>
        <div className={styles.profile__right}>
            <img
                src={imgSrc}
                alt="プロフィール画像"
                className={styles.profile__image}
            />
        </div>
    </div>
)

type EyeCatch = {
    imgSrc: string
}

export const EyeCatch: React.FC<EyeCatch> = ({ imgSrc }) => (
    <div className={styles.eyeCatch}>
        <Image src={imgSrc} />
    </div>
)
