import { GetStaticProps } from 'next'
import { client } from '@/lib/aspida';
import { MusicsResultList, MusicsSongCategories } from '@/api/@types'

export type Props = Partial<{
    musics: MusicsResultList;
    categories: MusicsSongCategories
}>

export const getStaticProps: GetStaticProps<Props> = async () => {
    const musicsFetchResult: MusicsResultList = await client.v1.musics.$get();
    const categoriesFetchResult: MusicsSongCategories = await client.v1.musics.song_categories.$get();

    return {
        props: {
            musics: musicsFetchResult,
            categories: categoriesFetchResult
        }
    }
}