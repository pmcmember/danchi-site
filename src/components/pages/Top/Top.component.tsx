import React from 'react'
import {
    BlogListResponse,
    MusicListResponse,
    MusicSongCategoryListResponse,
    VideoListResponse,
} from '@/api/@types'
import { Section } from '@/components/ui/Layouts'
import styles from './Top.module.css'
import { Image } from '@/components/ui/Image'
import { ContactOverview } from '@/components/pages/Contact/Contact'
import { MusicsOverview } from '@/components/pages/Musics'
import { BlogsOverview } from '@/components/pages/Blogs/Blogs'
import { VideosOverview } from '@/components/pages/Videos/Videos'

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

type BaseSectionType = {
    className?: React.ComponentProps<typeof Section>['className']
    bgColor?: React.ComponentProps<typeof Section>['bgColor']
}

type BlogsSection = {
    contents: BlogListResponse
} & BaseSectionType

export const BlogsSection: React.FC<BlogsSection> = React.memo(
    ({ contents, className, bgColor }) => (
        <Section
            title="活動報告"
            className={className}
            bgColor={bgColor}
            pageLink={'blogs'}
        >
            <BlogsOverview blogs={contents} />
        </Section>
    )
)

type MusicsSection = {
    contents: MusicListResponse
    categories: MusicSongCategoryListResponse
} & BaseSectionType

export const MusicsSection: React.FC<MusicsSection> = ({
    contents,
    categories,
    className,
    bgColor,
}) => (
    <Section
        title="フリーBGM"
        className={className}
        bgColor={bgColor}
        pageLink={'musics'}
    >
        <MusicsOverview contents={contents} categories={categories} />
    </Section>
)

type VideosSection = {
    contents: VideoListResponse
} & BaseSectionType

export const VideosSection: React.FC<VideosSection> = React.memo(
    ({ contents, className, bgColor }) => (
        <Section
            title="動画作品"
            className={className}
            bgColor={bgColor}
            pageLink={'videos'}
        >
            <VideosOverview contents={contents} />
        </Section>
    )
)

type ContactSection = {} & BaseSectionType

export const ContactSection: React.FC<ContactSection> = React.memo(
    ({ className, bgColor }) => {
        return (
            <Section
                title="お問い合わせ"
                className={className}
                bgColor={bgColor}
            >
                <ContactOverview />
            </Section>
        )
    }
)
