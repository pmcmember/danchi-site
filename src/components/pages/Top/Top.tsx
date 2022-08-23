import type { NextPage } from 'next'
import React from 'react'

import Video from '@/components/ui/Video'
import { Overview, Section, PageContentsWrapper } from '@/components/ui/Layouts'
import { PlaySongUI } from '@/components/ui/UIs'
import styles from './Top.module.css'
import HeroImageContent from '@/assets/Brick01.jpg'
import ProfileImage from '@/assets/twitter-icon.png'

// page overviews
import { MusicsOverview } from '@/components/pages/Musics/Musics'
import { BlogsOverview } from '@/components/pages/Blogs/Blogs'
import { ContactOverview } from '@/components/pages/Contact/Contact'
import { Props } from './getStaticProps'
import {
    BlogsSection,
    ContactSection,
    EyeCatch,
    HeroImage,
    MusicsSection,
    Profile,
    VideosSection,
} from './Top.component'

export const Top: NextPage<Props> = ({ musics, blogs }) => {
    return (
        <PageContentsWrapper page="top">
            <HeroImage
                src={HeroImageContent.src}
                subTitle="サブタイトルが入ります"
                title="タイトルが入りますタイトルが入ります"
            />
            <Profile
                imgSrc={ProfileImage.src}
                profileText="自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります自己紹介が入ります"
            />
            <BlogsSection contents={blogs} />
            <MusicsSection contents={blogs} bgColor={'yellow'} />
            <VideosSection contents={blogs} />
            <EyeCatch />
            <ContactSection />

            <PlaySongUI soundCloudContents={musics.contents} />
        </PageContentsWrapper>
    )
}
