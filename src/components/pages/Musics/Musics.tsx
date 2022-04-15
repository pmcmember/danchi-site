import type { NextPage } from 'next'
import React from 'react';
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { EmbedSoundCloud } from '@/components/ui/EmbedSoundCloud';
import { PageNames, PageTitles } from '@/const/pages';
import { Props } from './getStaticProps'
import { MusicsResult, MusicsResultList, MusicsSongCategories } from '@/api/@types';
import { useSoundCloud } from '@/hooks/useSoundCloud'
import { PlaySongUI } from '@/components/ui/UIs';
import {
    IoIosRepeat,
    IoIosShuffle,
    IoIosInfinite
} from 'react-icons/io';
import { IconButton, Tooltip } from '@mui/material'
import { PlayerTransIcon } from '@/components/ui/TransIcons'
import { CircularProgress } from '@mui/material'
import Link from 'next/link'



export const Musics: NextPage<Props> = ({musics, categories}) => {
    const pageName: PageNames = "musics";

    return (
        <PageContentsWrapper
            page={pageName}
            className="bg-white"
        >
            <Section>
                <Overview page={pageName} hideHeader hideLink>
                    {categories && (
                        <div className="mb-10 text-blue-400 underline">
                            <Link href={`/musics/categories/${categories[0].name}`}>
                                <a>カテゴリ一覧はこちら</a>
                            </Link>
                        </div>
                    )}
                    {musics ? (
                        <MusicsOverview contents={musics}/>
                    ) : (
                        <>楽曲が存在しません</>
                    )}
                </Overview>
            </Section>

            {musics && (
                <PlaySongUI
                    soundCloudContents={musics.contents}
                />
            )}
        </PageContentsWrapper>
    )
}



type MusicsOverviewProps = {
    contents: MusicsResultList;
    isContentsReloading?: boolean;
}

export const MusicsOverview: React.VFC<MusicsOverviewProps> = ({
    contents,
    isContentsReloading
}) => {
    const iframeId = "playlistInMusicsOverview"
    const [songConfig, setSongConfig] = React.useState<{repeat: boolean, shuffle: boolean, auto: boolean}>({
        repeat: false,
        shuffle: false,
        auto: false
    });
    const [currentSong, setCurrentSong] = React.useState<MusicsResultList["contents"][0]>(contents.contents[0])
    const { onPlayButtonClick, requestNextSong, soundCloudStatus } = useSoundCloud({iframeId: iframeId})
    
    React.useEffect(() => {
        if(soundCloudStatus === "FINISH") {
            switch(true) {
                case songConfig.repeat: {
                    console.log("repeat!")
                    onPlayButtonClick();
                }
                break;
                case songConfig.shuffle: {
                    console.log("shuffle!")
                    const nextSong = contents.contents[Math.floor(Math.random() * contents.contents.length)]
                    
                    if( ! nextSong.scApiUrl) return
                    
                    setCurrentSong(nextSong);
                    
                    requestNextSong(nextSong.scApiUrl)
                    .then(() => {
                        onPlayButtonClick();
                    })
                }
                break;
                case songConfig.auto: {
                    console.log("auto!")
                    const currentSongIndex = contents.contents.findIndex((c) => c.id === currentSong.id);
                    console.log(currentSongIndex);
                    const nextSong = 
                        (currentSongIndex + 1) >= contents.contents.length || currentSongIndex === -1
                        ? contents.contents[0]
                        : contents.contents[currentSongIndex + 1]
                    
                    if( ! nextSong.scApiUrl) return
        
                    setCurrentSong(nextSong);
                    
                    requestNextSong(nextSong.scApiUrl)
                    .then(() => {
                        onPlayButtonClick();
                    })
                }
                break;
            }
        }
    }, [
        soundCloudStatus,
        songConfig,
        requestNextSong,
        onPlayButtonClick,
        currentSong,
        setCurrentSong,
    ])

    const onPlayButtonClickHandler = React.useCallback(async (song: MusicsResultList["contents"][0]) => {
        if(song.scApiUrl !== currentSong.scApiUrl) {
            setCurrentSong(song)
            await requestNextSong(song.scApiUrl || "");
        }

        await onPlayButtonClick();
    }, [currentSong, setCurrentSong, requestNextSong, onPlayButtonClick])

    return (
        <>
            {contents.contents.length > 0 ? (
                <div
                    className={`flex flex-col gap-3 ${soundCloudStatus === "ERROR" || soundCloudStatus === "LOAD_PROGRESS" ? "pointer-events-none" : ""}`}
                >
                    <EmbedSoundCloud
                        // requestNextSong関数にてURLのロードを行っているため
                        // currentSong(useStateで管理している変数)は使用しない
                        embedUrl={contents.contents[0].scSrc || ""}
                        artistHref={contents.contents[0].scArtistHref || ""}
                        songHref={contents.contents[0].scSongHref || ""}
                        artistName={contents.contents[0].scArtistName|| ""}
                        songTitle={contents.contents[0].scSongTitle || ""}
                        size={{height: "165px"}}
                        // className={"pointer-events-none"}
                        id={iframeId}
                    />
                    <ul className="flex gap-2">
                        <li>
                            <Tooltip title="リピート">
                                <IconButton
                                    onClick={() => {
                                        setSongConfig((sc) => ({repeat: ! sc.repeat, shuffle: false, auto: false}))
                                    }}
                                    color={songConfig.repeat ? "primary": "default"}
                                >
                                    <IoIosInfinite/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="シャッフル">
                                <IconButton
                                    onClick={() => {
                                        setSongConfig((sc) => ({repeat: false, shuffle: ! sc.shuffle, auto: false}))
                                    }}
                                    color={songConfig.shuffle ? "primary": "default"}
                                    >
                                    <IoIosShuffle/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="自動再生">
                                <IconButton
                                    onClick={() => {
                                        setSongConfig((sc) => ({repeat: false, shuffle: false, auto: ! sc.auto}))
                                    }}
                                    color={songConfig.auto ? "primary": "default"}
                                >
                                    <IoIosRepeat/>
                                </IconButton>
                            </Tooltip>
                        </li>
                    </ul>
                    {isContentsReloading ? (
                        <CircularProgress/>
                    ) : (
                        <ul>
                            {contents.contents.map((song) => (
                                <li key={song.id}>
                                    <div
                                        className="cursor-pointer border border-zinc-400 px-3 py-2 w-full flex items-center"
                                        onClick={() => {
                                            onPlayButtonClickHandler(song)
                                        }}    
                                    >
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-lg">
                                                {song.scSongTitle || "タイトルなし"}
                                            </h2>
                                            {song.songCategories && (
                                                <ul className="flex gap-2">
                                                    {song.songCategories.map((category) => (
                                                        <li
                                                            style={{fontSize: "10px"}}
                                                            className="rounded-full bg-zinc-400 text-white px-2 py-1"
                                                            key={`${song.id}-${category.songCategory}`}
                                                        >{`#${category.songCategory}`}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        {song.scApiUrl && (
                                            <div className="ml-auto">
                                                <IconButton
                                                    color={currentSong.id === song.id? "primary": "default"}
                                                >
                                                    <PlayerTransIcon
                                                        status={currentSong.id === song.id? soundCloudStatus: "PAUSE"}
                                                    />
                                                </IconButton>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <div>お探しの曲は見つかりませんでした。</div>
            )}
            {/* {"contents" in contents ? (
                (contents as MusicsResultList).contents.map((content) => (
                    <EmbedSoundCloud
                        embedUrl={content.scSrc || ""}
                        artistHref={content.scArtistHref || ""}
                        songHref={content.scSongHref || ""}
                        artistName={content.scArtistName|| ""}
                        songTitle={content.scSongTitle || ""}
                        size={{height: "400px"}}
                        id={content.scSongTitle || ""}
                    />
                ))
            ) : (
            )} */}
        </>
    )
}

