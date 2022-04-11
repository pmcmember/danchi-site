import Top from '@/components/pages/Top'
import { GetStaticProps } from 'next'
import { MusicsResultList } from '@/api/@types'
import { client } from '@/lib/aspida';

export default Top


export type Props = {
    musics: MusicsResultList
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const musicsFetchResult: MusicsResultList = await client.v1.musics.$get();

    return {
        props: {
            musics: musicsFetchResult
        }
    }
}
