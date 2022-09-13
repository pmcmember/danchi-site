import { client } from '@/lib/aspida'
import { GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import { BlogListResponse } from '@/api/@types'

export type Params = ParsedUrlQuery & {
    pid: string
}

export const PER_PAGE = 10

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const blogsFetchResult: BlogListResponse = await client.v1.blogs.$get()
    const totalPages = Math.ceil(blogsFetchResult.totalCount / PER_PAGE)

    /**
     * startからendまで+1の等差配列を作成する
     * @param start 始まりの数
     * @param end 終わりの数
     * @returns +1の等差配列(length: 1 || (end - start) + 1)
     */
    const range = (start: number, end: number) => {
        if (start >= end) return [1]
        // prettier-ignore
        return [...Array((end - start) + 1)].map((_, i) => start + i)
    }

    const paths = range(1, totalPages).map((i: number) => ({
        params: { pid: String(i) },
    }))

    return {
        paths: paths,
        fallback: false,
    }
}
