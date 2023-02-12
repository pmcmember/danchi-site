import type { NextPage } from 'next'
import React from 'react'
import { PageContentsWrapper } from '@/components/ui/Layouts'
import { PageNames } from '@/const/pages'
import { Props } from './getStaticProps'
import { PlaySongUI } from '@/components/ui/UIs'
import { MusicsSection } from '@/components/pages/Musics/Music.component'

export const Musics: NextPage<Props> = ({ musics, categories }) => {
    const pageName: PageNames = 'musics'

    return (
        <PageContentsWrapper page={pageName} className="bg-white">
            {musics && (
                <MusicsSection contents={musics} categories={categories} />
            )}
            {musics && <PlaySongUI soundCloudContents={musics.contents} />}
        </PageContentsWrapper>
    )
}
