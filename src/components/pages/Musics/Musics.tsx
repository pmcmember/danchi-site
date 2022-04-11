import type { NextPage } from 'next'
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { EmbedSoundCloud } from '@/components/ui/EmbedSoundCloud';
import { PageNames, PageTitles } from '@/const/pages';
import { Props } from '@/pages/musics'
import { MusicsResult, MusicsResultList } from '@/api/@types';

export const Musics: NextPage<Props> = ({musics}) => {
    const pageName: PageNames = "musics";

    return (
        <PageContentsWrapper
            page={pageName}
            className="bg-white"
        >
            <Section>
                <Overview page={pageName} hideHeader hideLink>
                    <MusicsOverview contents={musics}/>
                </Overview>
            </Section>
        </PageContentsWrapper>
    )
}


type MusicsOverviewProps = {
    contents: MusicsResultList | MusicsResult
}

export const MusicsOverview: React.VFC<MusicsOverviewProps> = ({contents}) => {
    return (
        <>
            {"contents" in contents ? (
                (contents as MusicsResultList).contents.map((content) => (
                    <EmbedSoundCloud
                        embedUrl={content.scSrc || ""}
                        artistHref={content.scArtistHref || ""}
                        songHref={content.scSongHref || ""}
                        artistName={content.scArtistName|| ""}
                        songTitle={content.scSongTitle || ""}
                        size={{height: "400px"}}
                        id={content.scSongTitle || ""}
                    />
                ))
            ) : (
                <EmbedSoundCloud
                    embedUrl={contents.scSrc || ""}
                    artistHref={contents.scArtistHref || ""}
                    songHref={contents.scSongHref || ""}
                    artistName={contents.scArtistName|| ""}
                    songTitle={contents.scSongTitle || ""}
                    size={{height: "400px"}}
                    id={contents.scSongTitle || ""}
                />
            )}
        </>
    )
}