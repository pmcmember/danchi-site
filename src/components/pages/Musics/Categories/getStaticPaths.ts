import { client } from '@/lib/aspida';
import { GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import { MusicsSongCategories } from '@/api/@types'

export type Params = ParsedUrlQuery & {
    category: string
}


export const getStaticPaths: GetStaticPaths<Params> = async() => {
    const songCategoriesFetchResult: MusicsSongCategories = await client.v1.musics.song_categories.$get();

    const paths = songCategoriesFetchResult.map((s) => ({
        params: {category: s.name}
    }))
    
    return {
        paths: paths,
        fallback: false
    }
}