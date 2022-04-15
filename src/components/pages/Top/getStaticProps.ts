import { GetStaticProps } from 'next';
import { BlogsResultList, MusicsResultList } from '@/api/@types'
import { client } from '@/lib/aspida';


export type Props = {
    musics: MusicsResultList
    blogs: BlogsResultList
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const musicsFetchResult: MusicsResultList = await client.v1.musics.$get();
    const blogsFetchResult: BlogsResultList = await client.v1.blogs.$get()

    return {
        props: {
            musics: musicsFetchResult,
            blogs: blogsFetchResult
        }
    }
}