import type { NextPage } from 'next'
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { EmbedSoundCloud } from '@/components/ui/EmbedSoundCloud';
import { PageNames, PageTitles } from '@/const/pages';

export const Musics: NextPage = () => {
    const pageName: PageNames = "musics";

    return (
        <PageContentsWrapper
            page={pageName}
            className="bg-white"
        >
            <Section>
                <Overview page={pageName} hideHeader hideLink>
                    <MusicsOverview/>
                </Overview>
            </Section>
        </PageContentsWrapper>
    )
}

export const MusicsOverview: React.VFC = () => {
    return (
        <>
            <EmbedSoundCloud
                embedUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1231793908&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                artistHref="https://soundcloud.com/danchi-bgm"
                songHref="https://soundcloud.com/danchi-bgm/futto"
                artistName="DANCHi(BGM提供部)"
                songName="FUTTO"
                size={{height: "400px"}}
                id="test"
            />
        </>
    )
}