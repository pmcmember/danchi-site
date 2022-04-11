import Musics from '@/components/pages/Musics'
import { GetStaticProps } from 'next'
import { client } from '@/lib/aspida';
import { MusicsResultList } from '@/api/@types'

export default Musics


export type Props = {
    musics: MusicsResultList
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const result: MusicsResultList = await client.v1.musics.$get();

    return {
        props: {
            musics: result
        }
    }
}