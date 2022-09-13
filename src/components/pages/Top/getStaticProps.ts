import { GetStaticProps } from 'next'
import {
    BlogListResponse,
    MusicListResponse,
    MusicSongCategoryListResponse,
    VideoListResponse,
} from '@/api/@types'
import { client } from '@/lib/aspida'

export type Props = {
    musics: MusicListResponse
    categories: MusicSongCategoryListResponse
    blogs: BlogListResponse
    videos: VideoListResponse
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const musicsFetchResult = await client.v1.musics.$get()
    const blogsFetchResult = await client.v1.blogs.$get()
    const videosFetchResult = await client.v1.videos.$get({
        query: {
            maxResults: 8,
        },
    })
    const categoriesFetchResult: MusicSongCategoryListResponse =
        await client.v1.musics.category.$get()

    return {
        props: {
            musics: musicsFetchResult,
            categories: categoriesFetchResult,
            blogs: blogsFetchResult,
            videos: videosFetchResult,
        },
    }
}
