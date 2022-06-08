import { GetServerSideProps } from "next";
import { MusicsSongCategories, MusicsResultList } from '@/api/@types'
import { client } from '@/lib/aspida';
import { Params } from './getStaticPaths'

export type Props = Partial<{
    musics: MusicsResultList;
    categories: MusicsSongCategories;
    category: string;
}>

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const category = params?.category || ""
    const musicsFetchResult: MusicsResultList = await client.v1.musics.$get({
        query: {
            filters: "songCategories.songCategory.songCategory[contains]" + category,
            // limit: 50
        }
    });
    const songCategoriesFetchResult: MusicsSongCategories = await client.v1.musics.song_categories.$get();
    
    return {
        props: {
            musics: musicsFetchResult,
            categories: songCategoriesFetchResult,
            category: category
        }
    }
}