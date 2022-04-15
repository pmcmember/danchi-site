import type { NextPage } from 'next'
import React from 'react';

import Video from '@/components/ui/Video';
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { PlaySongUI } from '@/components/ui/UIs';

// page overviews
import { MusicsOverview } from '@/components/pages/Musics/Musics';
import { BlogsOverview } from '@/components/pages/Blogs/Blogs';
import { ContactOverview } from '@/components/pages/Contact/Contact';
import { Props } from './getStaticProps'


export const Top: NextPage<Props> = ({musics, blogs}) => {
    return (
        <PageContentsWrapper page="top">
            <div className="md:pt-16"/>
            <Section>
                <Video
                    url="https://www.youtube.com/embed/jrwWiLUzCBI"
                    title="Youtube Video"
                />
            </Section>
            <Section>
                <Overview page="musics">
                    <MusicsOverview contents={musics}/>
                </Overview>
            </Section>
            <Section>
                <Overview page="blogs">
                    <BlogsOverview blogs={blogs}/>
                </Overview>
            </Section>
            <Section>
                <Overview page="contact" hideLink>
                    <ContactOverview/>
                </Overview>
            </Section>

            <PlaySongUI
                soundCloudContents={musics.contents}
            />
        </PageContentsWrapper>
    )
}
