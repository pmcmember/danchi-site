import { GetStaticProps } from 'next'
import { client } from '@/lib/aspida';
import { BlogsResult, BlogsResultList } from '@/api/@types'
import { Params } from './getStaticPaths';


export type Props = {
    blogs: BlogsResultList;
    blogContents: BlogsResult;
}


export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
    const blogsFetchResult: BlogsResultList = await client.v1.blogs.$get();
    const blogFetchResult: BlogsResult = await client.v1.blogs.detail._id(params!.slug as string).$get();

    return {
        props: {
            blogs: blogsFetchResult,
            blogContents: blogFetchResult
        },
    }
}