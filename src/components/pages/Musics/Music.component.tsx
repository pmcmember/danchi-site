import React from 'react'
import { EmbedSoundCloud } from '@/components/ui/EmbedSoundCloud'
import {
    MusicListResponse,
    MusicResponse,
    MusicSongCategoryListResponse,
    MusicSongCategoryResponse,
} from '@/api/@types'
import { useSoundCloud, SoundCloudStatus } from '@/hooks/useSoundCloud'
import {
    IoIosRepeat,
    IoIosShuffle,
    IoIosInfinite,
    IoIosTrendingUp,
} from 'react-icons/io'
import { PlayerTransIcon } from '@/components/ui/TransIcons'
import { CircularProgress } from '@mui/material'
import { IconButton, Tooltip, FormControl, Chip } from '@mui/material'
import styles from './Musics.module.css'
import { SearchInput } from '@/components/ui/Inputs'
import { client } from '@/lib/aspida'

type MusicsOverviewProps = {
    contents: MusicListResponse
    categories?: MusicSongCategoryListResponse
}

type SongConfig = {
    repeat: boolean
    shuffle: boolean
    auto: boolean
}

export const MusicsOverview: React.VFC<MusicsOverviewProps> = ({
    contents,
    categories,
}) => {
    const iframeId = 'playlistInMusicsOverview'
    const [songConfig, setSongConfig] = React.useState<SongConfig>({
        repeat: false,
        shuffle: false,
        auto: false,
    })
    const [songs, setSongs] = React.useState<MusicListResponse['contents']>(
        contents.contents
    )
    const [currentSong, setCurrentSong] = React.useState<
        MusicListResponse['contents'][0] | undefined
    >(contents.contents[0])
    const [searchContent, setSearchContent] = React.useState<string>('')
    const [isContentsReloading, setIsContentsReloading] =
        React.useState<boolean>(false)
    const { onPlayButtonClick, requestNextSong, soundCloudStatus } =
        useSoundCloud({ iframeId: iframeId })

    /**
     * songsの内容が変更した際の挙動
     */
    React.useEffect(() => {
        setCurrentSong(songs[0])
    }, [songs])

    /**
     * 楽曲が流れ終えた際の挙動
     */
    React.useEffect(() => {
        if (soundCloudStatus !== 'FINISH') {
            return
        }
        switch (true) {
            case songConfig.repeat:
                {
                    console.log('repeat!')
                    onPlayButtonClick()
                }
                break
            case songConfig.shuffle:
                {
                    console.log('shuffle!')
                    const nextSong =
                        contents.contents[
                            Math.floor(Math.random() * contents.contents.length)
                        ]

                    if (!nextSong.scApiUrl) return

                    setCurrentSong(nextSong)

                    requestNextSong(nextSong.scApiUrl).then(() => {
                        onPlayButtonClick()
                    })
                }
                break
            case songConfig.auto:
                {
                    console.log('auto!')
                    const currentSongIndex = contents.contents.findIndex(
                        (c) => c.id === currentSong?.id
                    )
                    console.log(currentSongIndex)
                    const nextSong =
                        currentSongIndex + 1 >= contents.contents.length ||
                        currentSongIndex === -1
                            ? contents.contents[0]
                            : contents.contents[currentSongIndex + 1]

                    if (!nextSong.scApiUrl) return

                    setCurrentSong(nextSong)

                    requestNextSong(nextSong.scApiUrl).then(() => {
                        onPlayButtonClick()
                    })
                }
                break
        }
    }, [
        soundCloudStatus,
        songConfig,
        requestNextSong,
        onPlayButtonClick,
        currentSong,
        setCurrentSong,
    ])

    /**
     * 再生ボタンを押した際のハンドラ
     */
    const onPlayButtonClickHandler = React.useCallback(
        async (song: MusicListResponse['contents'][0]) => {
            if (song.scApiUrl !== currentSong?.scApiUrl) {
                setCurrentSong(song)
                await requestNextSong(song.scApiUrl || '')
            }

            await onPlayButtonClick()
        },
        [currentSong, setCurrentSong, requestNextSong, onPlayButtonClick]
    )

    const onSearchButtonClick = async (content: string) => {
        setIsContentsReloading(true)
        const result = await client.v1.musics.search.$get({
            query: {
                value: content,
            },
        })
        setSongs(result?.contents || [])
        setIsContentsReloading(false)
    }

    const onCategoryButtonClickHandler = async (
        tag: MusicSongCategoryResponse
    ) => {
        setIsContentsReloading(true)
        setSearchContent(tag.name)
        const result = await client.v1.musics.search.category.$get({
            query: tag,
        })
        setSongs(result.contents || [])
        setIsContentsReloading(false)
    }

    return (
        <div className={styles.overview}>
            {soundCloudStatus === 'ERROR' && (
                <div className={styles.errorwrap}>
                    <h2 className={styles.errorwrap__text}>
                        エラーが発生したため、現在利用できません。
                        <br />
                        お手数おかけし申し訳ございませんが、一度リロードして頂いたのち、再度ご利用いただきますようお願いいたします。
                    </h2>
                </div>
            )}
            <SearchForm
                searchContent={searchContent}
                onFormChange={setSearchContent}
                categories={categories}
                onCategoryButtonClick={onCategoryButtonClickHandler}
                onSearchButtonClick={onSearchButtonClick}
            />
            {songs.length <= 0 && <div>お探しの曲は見つかりませんでした。</div>}
            <div
                className={`${styles.overview__content} ${
                    soundCloudStatus === 'ERROR' ||
                    soundCloudStatus === 'LOAD_PROGRESS'
                        ? 'pointer-events-none'
                        : ''
                }`}
                // このエレメントごと条件分岐で消してしまうと、サウンドクラウドwidget APIがエラーを起こすため、
                // 削除せずdisplay noneとする
                style={songs.length <= 0 ? { display: 'none' } : {}}
            >
                <CircularProgress
                    className={`${
                        isContentsReloading ? 'inline-block' : 'hidden'
                    }`}
                />
                <div className={`${isContentsReloading ? 'hidden' : 'block'}`}>
                    <EmbedSoundCloud
                        // requestNextSong関数にてURLのロードを行っているため
                        // currentSong(useStateで管理している変数)は使用しない
                        embedUrl={currentSong?.scSrc || ''}
                        artistHref={currentSong?.scArtistHref || ''}
                        songHref={currentSong?.scSongHref || ''}
                        artistName={currentSong?.scArtistName || ''}
                        songTitle={currentSong?.scSongTitle || ''}
                        size={{ height: '165px' }}
                        // className={"pointer-events-none"}
                        id={iframeId}
                    />
                    <SongConfigs content={songConfig} set={setSongConfig} />
                    <SongList
                        onPlayButtonClick={onPlayButtonClickHandler}
                        songs={songs}
                        currentSong={currentSong}
                        soundCloudStatus={soundCloudStatus}
                    />
                </div>
            </div>
        </div>
    )
}

type SearchForm = {
    searchContent: string
    onFormChange: (value: string) => void
    onSearchButtonClick: (searchContent: string) => Promise<void>
    onCategoryButtonClick: (
        category: MusicSongCategoryResponse
    ) => Promise<void>
    categories?: MusicSongCategoryListResponse
}

const SearchForm: React.FC<SearchForm> = ({
    searchContent,
    onFormChange,
    onSearchButtonClick,
    onCategoryButtonClick,
    categories,
}) => (
    <div className="flex flex-col gap-4 mb-24">
        <FormControl className={styles.search}>
            <SearchInput
                value={searchContent}
                onFormChange={(e) => onFormChange(e.target.value)}
                onSearchButtonClick={() => onSearchButtonClick(searchContent)}
                placeholder="曲検索"
            />
            {categories && (
                <div className={styles.category}>
                    <div className={styles.category__section}>
                        <h3 className={styles.category__title}>ジャンル</h3>
                        <ul className={styles.category__lists}>
                            {categories
                                .filter((c) => c.type === 'songGenres')
                                .map((c) => (
                                    <li
                                        key={c.name}
                                        className={styles.ycategory__list}
                                    >
                                        <Chip
                                            label={c.name}
                                            variant="outlined"
                                            onClick={() =>
                                                onCategoryButtonClick({
                                                    type: c.type,
                                                    name: c.name,
                                                })
                                            }
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className={styles.category__section}>
                        <h3 className={styles.category__title}>曲のイメージ</h3>
                        <ul className={styles.category__lists}>
                            {categories
                                .filter((c) => c.type === 'songImages')
                                .map((c) => (
                                    <li
                                        key={c.name}
                                        className={styles.category__list}
                                    >
                                        <Chip
                                            className="cursor-pointer"
                                            label={c.name}
                                            variant="outlined"
                                            onClick={() =>
                                                onCategoryButtonClick({
                                                    type: c.type,
                                                    name: c.name,
                                                })
                                            }
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
        </FormControl>
    </div>
)

type SongConfigs = {
    content: SongConfig
    set: React.Dispatch<React.SetStateAction<SongConfig>>
}
const SongConfigs: React.FC<SongConfigs> = ({ content, set }) => (
    <ul className="flex gap-2">
        <li>
            <Tooltip title="リピート">
                <IconButton
                    onClick={() => {
                        set((sc) => ({
                            repeat: !sc.repeat,
                            shuffle: false,
                            auto: false,
                        }))
                    }}
                    color={content.repeat ? 'primary' : 'default'}
                >
                    <IoIosInfinite />
                </IconButton>
            </Tooltip>
        </li>
        <li>
            <Tooltip title="シャッフル">
                <IconButton
                    onClick={() => {
                        set((sc) => ({
                            repeat: false,
                            shuffle: !sc.shuffle,
                            auto: false,
                        }))
                    }}
                    color={content.shuffle ? 'primary' : 'default'}
                >
                    <IoIosShuffle />
                </IconButton>
            </Tooltip>
        </li>
        <li>
            <Tooltip title="自動再生">
                <IconButton
                    onClick={() => {
                        set((sc) => ({
                            repeat: false,
                            shuffle: false,
                            auto: !sc.auto,
                        }))
                    }}
                    color={content.auto ? 'primary' : 'default'}
                >
                    <IoIosRepeat />
                </IconButton>
            </Tooltip>
        </li>
    </ul>
)

type SongList = {
    songs: MusicListResponse['contents']
    currentSong?: MusicListResponse['contents'][0]
    soundCloudStatus: SoundCloudStatus
    onPlayButtonClick: (song: MusicListResponse['contents'][0]) => Promise<void>
}

const SongList: React.FC<SongList> = ({
    songs,
    onPlayButtonClick,
    currentSong,
    soundCloudStatus,
}) => (
    <ul className={styles.songList}>
        {songs.map((song) => (
            <li
                key={song.id}
                className={styles.songList__list}
                onClick={() => onPlayButtonClick(song)}
            >
                <div className={styles.song}>
                    <h2 className={styles.song__title}>
                        {song.scSongTitle || 'タイトルなし'}
                    </h2>
                    {song.scSongDescription && (
                        <div className={styles.song__description}>
                            {song.scSongDescription}
                        </div>
                    )}
                    {/* 曲のジャンルとイメージのリスト */}
                    <ul className={styles.song__tags}>
                        {song.songGenres.value.map((genre) => (
                            <li
                                className={styles.song__tag}
                                key={`${song.id}-${genre}`}
                            >{`#${genre}`}</li>
                        ))}
                        {song.songImages.value.map((image) => (
                            <li
                                className={styles.song__tag}
                                key={`${song.id}-${image}`}
                            >{`#${image}`}</li>
                        ))}
                    </ul>
                </div>
                {song.scApiUrl && (
                    <div className="ml-auto">
                        <IconButton
                            color={
                                currentSong?.id === song.id
                                    ? 'primary'
                                    : 'default'
                            }
                        >
                            <PlayerTransIcon
                                status={
                                    currentSong?.id === song.id
                                        ? soundCloudStatus
                                        : 'PAUSE'
                                }
                            />
                        </IconButton>
                    </div>
                )}
            </li>
        ))}
    </ul>
)
