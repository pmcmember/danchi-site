import { GetStaticProps } from 'next'
import { client } from '@/lib/aspida'
import { BlogListResponse, BlogResponse } from '@/api/@types'
import { Params } from './getStaticPaths'

export type Props = {
    blogs: BlogListResponse
    blogContents: BlogResponse
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    const blogsFetchResult: BlogListResponse = await client.v1.blogs.$get()
    const blogFetchResult: BlogResponse = await client.v1.blogs
        ._id(params!.slug)
        .$get()

    return {
        props: {
            blogs: blogsFetchResult,
            blogContents: blogFetchResult,
        },
    }
}
