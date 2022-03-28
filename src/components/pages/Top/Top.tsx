import type { NextPage } from 'next'

import styles from './Top.module.css'

import Layout from '@/components/ui/Layout';
import Video from '@/components/ui/Video';
import { Overview } from '@/components/ui/Overview/Overview';
import EmbedSoundCloud from '@/components/ui/EmbedSoundCloud';

export const Top: NextPage = () => {
  return (
    <Layout>
        <div className={styles.pages}>
            <div className={styles.pages__div}>
                <Video/>
            </div>
            <div className={styles.pages__div}>
                <Overview page="musics">
                    <EmbedSoundCloud
                        embedUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/23436938&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        artistHref="https://soundcloud.com/baron1_3"
                        songHref="https://soundcloud.com/baron1_3/sets/vocaloid"
                        artistName="騒音のない世界"
                        songName="Vocaloid Music"
                        size={{height: "400px"}}
                    />
                </Overview>
            </div>
            <div className={styles.pages__div}>
                <Overview page="blogs">
                    <div>blogs</div>
                </Overview>
            </div>
        </div>
    </Layout>
  )
}

