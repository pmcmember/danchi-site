import { GetStaticProps } from 'next'
import { client } from '@/lib/aspida'
import { MusicListResponse, MusicSongCategoryListResponse } from '@/api/@types'

export type Props = Partial<{
    musics: MusicListResponse
    categories: MusicSongCategoryListResponse
}>

export const getStaticProps: GetStaticProps<Props> = async () => {
    const musicsFetchResult: MusicListResponse = await client.v1.musics.$get()
    const categoriesFetchResult: MusicSongCategoryListResponse =
        await client.v1.musics.category.$get()

    return {
        props: {
            musics: musicsFetchResult,
            categories: categoriesFetchResult,
        },
    }
}
