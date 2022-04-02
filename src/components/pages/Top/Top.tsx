import type { NextPage } from 'next'
import React from 'react';

import Video from '@/components/ui/Video';
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';

// page overviews
import { MusicsOverview } from '../Musics/Musics';
import { BlogsOverview } from '@/components/pages/Blogs/Blogs';
import { ContactOverview } from '@/components/pages/Contact/Contact';

// dev sample
import { blogData } from '@/samples/BlogData'


export const Top: NextPage = () => {
    return (
        <PageContentsWrapper page="top">
            <Section>
                <Video
                    url="https://www.youtube.com/embed/_XCwIrCPAys"
                    title="Youtube Video"
                />
            </Section>
            <Section>
                <Overview page="musics">
                    <MusicsOverview/>
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
        </PageContentsWrapper>
    )
}
