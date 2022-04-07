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

// dev sample
import { blogData } from '@/samples/BlogData'


export const Top: NextPage = () => {
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

            <PlaySongUI
                soundCloudInfos={[
                    {
                        iframeRaw: "dammy",
                        scSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/465705123&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
                        scArtistName: "dammy",
                        scArtistHref: "aaa",
                        scSongTitle: "aaa",
                        scSongHref: "aaa",
                        scApiUrl: "https://api.soundcloud.com/tracks/465705123"
                    },
                    {
                        iframeRaw: "dammy",
                        scSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427416225&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
                        scArtistName: "dammy",
                        scArtistHref: "aaa",
                        scSongTitle: "aaa",
                        scSongHref: "aaa",
                        scApiUrl: "https://api.soundcloud.com/tracks/427416225"
                    },
                    {
                        iframeRaw: "dammy",
                        scSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/462277161&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
                        scArtistName: "dammy",
                        scArtistHref: "aaa",
                        scSongTitle: "aaa",
                        scSongHref: "aaa",
                        scApiUrl: "https://api.soundcloud.com/tracks/462277161"
                    }
                ]}
            />
        </PageContentsWrapper>
    )
}
