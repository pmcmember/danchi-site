import { client } from '@/lib/aspida';
import { GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import { BlogsResultList } from '@/api/@types'

export type Params = ParsedUrlQuery & {
    pid: string
}

export const PER_PAGE = 10;


export const getStaticPaths: GetStaticPaths<Params> = async() => {
    const blogsFetchResult: BlogsResultList = await client.v1.blogs.$get();

    const range = (start: number, end: number) => {
        if(start >= end) return [1];
        return [...Array(end - start + 1)].map((_, i) => start + i)
    }

    const paths = range(1, Math.ceil(blogsFetchResult.totalCount / PER_PAGE)).map((i: number) => ({
        params: {pid: String(i)}
    }))
    
    return {
        paths: paths,
        fallback: false
    }
}