import type { NextPage } from 'next'
import React from 'react';

import Video from '@/components/ui/Video';
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { PlaySongUI } from '@/components/ui/PlaySongUI';

// page overviews
import { MusicsOverview } from '@/components/pages/Musics/Musics';
import { BlogsOverview } from '@/components/pages/Blogs/Blogs';
import { ContactOverview } from '@/components/pages/Contact/Contact';
import { Props } from '@/pages';

// dev sample
import { blogData } from '@/samples/BlogData'


export const Top: NextPage<Props> = ({musics}) => {
    return (
        <PageContentsWrapper page="top">
            <div className="md:pt-16"/>
            <Section>
                <Video
                    url="https://www.youtube.com/embed/_XCwIrCPAys"
                    title="Youtube Video"
                />
            </Section>
            <Section>
                <Overview page="musics">
                    <MusicsOverview contents={musics.contents[0]}/>
                </Overview>
            </Section>
            <Section>
                <Overview page="blogs">
                    <BlogsOverview/>
                </Overview>
            </Section>
            <Section>
                <Overview page="contact" hideLink>
                    <ContactOverview/>
                </Overview>
            </Section>

            <PlaySongUI
                soundCloudInfos={musics.contents}
            />
        </PageContentsWrapper>
    )
}
