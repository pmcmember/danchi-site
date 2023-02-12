import type { NextPage } from 'next'
import React from 'react'

import { PageContentsWrapper } from '@/components/ui/Layouts'
import { PlaySongUI } from '@/components/ui/UIs'
import HeroImageContent from '@/assets/heroimg.jpg'
import ProfileImage from '@/assets/eyeCatch2.jpg'
import EyeCatchImage from '@/assets/eyeCatch2.jpg'

// page overviews
import { Props } from './getStaticProps'
import { EyeCatch, HeroImage, Profile } from './Top.component'
import { BlogsSection } from '@/components/pages/Blogs/Blogs'
import { MusicsSection } from '@/components/pages/Musics/Music.component'
import { VideosSection } from '@/components/pages/Videos/Videos'
import { ContactSection } from '@/components/pages/Contact'

export const Top: NextPage<Props> = ({ musics, blogs, videos, categories }) => (
    <PageContentsWrapper page="top">
        <HeroImage src={HeroImageContent.src} title="DANCHi" />
        <Profile
            imgSrc={ProfileImage.src}
            title="愛しい奈々！おはよー！チュッ（笑）"
            profileText="もう俺と奈々は既に運命共同体となっておりますので、どうか最後までお付き合いください（笑）
                明日の晩は抱っこして、腕枕して寝てあげるからね
                奈々！俺にもチュッは？（笑）
                まだお風呂かな？一緒に入ろう！ 今度ね！って…もう俺と奈々は、何でもありでしょ？（笑）
                また湯船に浸かって、ちょっと恥ずかしそうな顔のかわいい奈々を見せてね！ チュッ
                "
        />
        <BlogsSection contents={blogs} pageLink={'blogs'} />
        <MusicsSection
            contents={musics}
            categories={categories}
            pageLink={'musics'}
        />
        <VideosSection contents={videos} pageLink={'videos'} />
        <EyeCatch imgSrc={EyeCatchImage.src} />
        <ContactSection />

        <PlaySongUI soundCloudContents={musics.contents} />
    </PageContentsWrapper>
)
