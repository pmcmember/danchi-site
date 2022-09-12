import type { NextPage } from 'next'
import React from 'react'
import { Overview, Section, PageContentsWrapper } from '@/components/ui/Layouts'
import { PageNames } from '@/const/pages'
import { Props } from './getStaticProps'
import { PlaySongUI } from '@/components/ui/UIs'
import { MusicsOverview } from './Music.component'

export const Musics: NextPage<Props> = ({ musics, categories }) => {
    const pageName: PageNames = 'musics'

    return (
        <PageContentsWrapper page={pageName} className="bg-white">
            <Section title="フリーBGM">
                {musics ? (
                    <MusicsOverview contents={musics} categories={categories} />
                ) : (
                    <>楽曲が存在しません</>
                )}
            </Section>

            {musics && <PlaySongUI soundCloudContents={musics.contents} />}
        </PageContentsWrapper>
    )
}
