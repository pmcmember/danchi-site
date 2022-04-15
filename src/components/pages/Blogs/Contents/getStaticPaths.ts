import { client } from '@/lib/aspida';
import { GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import { BlogsResultList } from '@/api/@types'

export type Params = ParsedUrlQuery & {
    slug: string
}


export const getStaticPaths: GetStaticPaths<Params> = async() => {
    const blogsFetchResult: BlogsResultList = await client.v1.blogs.$get();
    const paths = blogsFetchResult.contents.map((blog) => ({
        params: {slug: blog.id}
    }))
    
    return {
        paths: paths,
        fallback: false
    }
}