import type { NextPage } from 'next'
import { Props } from './getStaticProps'
import {
    Menu,
    Overview,
    PageContentsWrapper,
    Section,
} from '@/components/ui/Layouts'
import { PageNames } from '@/const/pages'
import { StandardCard } from '@/components/ui/Cards'
import { Image } from '@/components/ui/Image'
import { VideoListResponse } from '@/api/@types'
import React from 'react'

export const Videos: NextPage<Props> = ({ videos }) => {
    const pageName: PageNames = 'videos'

    return (
        <PageContentsWrapper page={pageName} className="bg-white">
            <Section>
                <Overview page={pageName} hideHeader hideLink>
                    <VideosOverview contents={videos} />
                </Overview>
            </Section>
        </PageContentsWrapper>
    )
}

type VideosOverview = {
    contents: VideoListResponse
}

export const VideosOverview: React.VFC<VideosOverview> = ({ contents }) => {
    return (
        <Menu
            contents={contents.items.map((content) => (
                <StandardCard
                    key={content.id.videoId}
                    title={content.snippet.title}
                    href={`https://www.youtube.com/watch?v=${content.id.videoId}`}
                    Description={content.snippet.description}
                    Image={
                        <Image
                            src={content.snippet.thumbnails.high.url}
                            alt={`${content.snippet.title}のイメージ`}
                            className="object-cover"
                        />
                    }
                    aspect={'aspect-video'}
                />
            ))}
        />
    )
}
