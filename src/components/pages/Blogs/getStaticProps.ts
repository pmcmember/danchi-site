import { GetStaticProps } from 'next'
import { client } from '@/lib/aspida'
import { BlogsResultList } from '@/api/@types'
import { Params, PER_PAGE } from './getStaticPaths'
import { PaginationProps } from '@/const/pages'

export type Props = {
    blogs: BlogsResultList
} & PaginationProps

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    const result: BlogsResultList = await client.v1.blogs.$get({
        query: {
            limit: PER_PAGE,
            offset: (Number(params?.pid || 1) - 1) * PER_PAGE,
        },
    })

    return {
        props: {
            blogs: result,
            currentPage: String(params?.pid || 1),
            totalPages: String(result.totalCount || 1),
        },
    }
}
