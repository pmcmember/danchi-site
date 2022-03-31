import type { NextPage } from 'next'

import Video from '@/components/ui/Video';
import {
    Overview,
    Section,
    ColumnsList
} from '@/components/ui/Layouts';
import EmbedSoundCloud from '@/components/ui/EmbedSoundCloud';

import { ResponsiveCard } from '@/components/ui/Cards';

import React from 'react';


// dev sample
import { blogData } from '@/samples/BlogData'


export const Top: NextPage = () => {
    return (
        <div className="w-full pt-20 pb-16 md:pb-24">
            <Section>
                <Video/>
            </Section>
            <Section>
                <Overview page="musics">
                    <EmbedSoundCloud
                        embedUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/23436938&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        artistHref="https://soundcloud.com/baron1_3"
                        songHref="https://soundcloud.com/baron1_3/sets/vocaloid"
                        artistName="騒音のない世界"
                        songName="Vocaloid Music"
                        size={{height: "400px"}}
                    />
                </Overview>
            </Section>
            <Section>
                <Overview page="blogs">
                    <ColumnsList.Parent>
                        {blogData.map((blog) => (
                            <ColumnsList.Child key={blog.slug}>
                                <ResponsiveCard
                                    href={`/blog/${blog.slug}`}
                                    description={blog.description}
                                    title={blog.title}
                                    img={blog.img}
                                    tags={blog.tags}
                                />
                            </ColumnsList.Child>
                        ))}
                    </ColumnsList.Parent>
                </Overview>
            </Section>
            <Section>
                <Overview page="contact" hideLink={true}>
                    contact
                </Overview>
            </Section>
        </div>
    )
}