import { client } from '@/lib/aspida'
import { GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import { BlogListResponse } from '@/api/@types'

export type Params = ParsedUrlQuery & {
    slug: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const blogsFetchResult: BlogListResponse = await client.v1.blogs.$get()
    const paths = blogsFetchResult.contents.map((blog) => ({
        params: { slug: blog.id },
    }))

    return {
        paths: paths,
        fallback: false,
    }
}
