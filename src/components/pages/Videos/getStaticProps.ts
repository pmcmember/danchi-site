import { GetStaticProps } from 'next'
import { VideoListResponse } from '@/api/@types'
import { client } from '@/lib/aspida'

export type Props = {
    videos: VideoListResponse
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const videosFetchResult = await client.v1.videos.$get({
        query: {
            maxResults: 8,
        },
    })

    return {
        props: {
            videos: videosFetchResult,
        },
    }
}
