import React from 'react'
import { RealDentButton } from '@/components/ui/Buttons'
import { useModal, useSoundCloud } from '@/hooks'
import { EmbedSoundCloud } from '@/components/ui/EmbedSoundCloud'
import { Box } from '@mui/material'
import { MusicListResponse } from '@/api/@types'
import { PlayerTransIcon } from '@/components/ui/TransIcons'
import { FaUser } from 'react-icons/fa'
import { IoIosMusicalNotes } from 'react-icons/io'

type Props = {
    soundCloudContents: MusicListResponse['contents']
}

export const PlaySongUI: React.VFC<Props> = ({ soundCloudContents }) => {
    const iframeId = 'play-song-ui'
    const { onPlayButtonClick, requestNextSong, soundCloudStatus } =
        useSoundCloud({ iframeId })
    const { setIsModalOpen, Modal } = useModal({})
    const [currentSong, setCurrentSong] = React.useState<
        MusicListResponse['contents'][0]
    >(soundCloudContents[Math.floor(Math.random() * soundCloudContents.length)])

    const onPlayButtonClickHandler = React.useCallback(() => {
        soundCloudStatus === 'PAUSE' || soundCloudStatus === 'SEEK'
            ? (() => {
                  const scInfo =
                      soundCloudContents[
                          Math.floor(Math.random() * soundCloudContents.length)
                      ]

                  setCurrentSong(scInfo)
                  requestNextSong(scInfo.scApiUrl || '').then(() => {
                      onPlayButtonClick()
                  })
              })()
            : (() => {
                  onPlayButtonClick()
              })()
    }, [soundCloudStatus, setCurrentSong, requestNextSong, onPlayButtonClick])

    React.useEffect(() => {
        if (soundCloudStatus === 'FINISH') {
            const currentSongIndex = soundCloudContents.findIndex(
                (c) => c.id === currentSong.id
            )

            const nextSong =
                currentSongIndex + 1 >= soundCloudContents.length ||
                currentSongIndex === -1
                    ? soundCloudContents[0]
                    : soundCloudContents[currentSongIndex + 1]

            if (!nextSong.scApiUrl) return

            setCurrentSong(nextSong)

            requestNextSong(nextSong.scApiUrl).then(() => {
                onPlayButtonClick()
            })
        }
    }, [
        soundCloudStatus,
        requestNextSong,
        onPlayButtonClick,
        currentSong,
        setCurrentSong,
    ])

    return (
        <>
            <div className="fixed bottom-5 right-5 sm:bottom-16 sm:right-5">
                {soundCloudStatus === 'PLAY_PROGRESS' && (
                    <div
                        className="bg-white cursor-pointer py-2 -translate-y-2 flex justify-center items-center rounded-full border border-slate-800"
                        style={{ fontSize: '10px', width: '90px' }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        楽曲詳細
                    </div>
                )}
                <RealDentButton
                    size="90px"
                    disabled={soundCloudStatus === 'ERROR'}
                    onClick={onPlayButtonClickHandler}
                >
                    <span
                        className="translate-y-1"
                        style={{ fontSize: '10px' }}
                    >
                        ランダム再生
                    </span>
                    <span className="text-5xl text-blue-900">
                        <PlayerTransIcon status={soundCloudStatus} />
                    </span>
                </RealDentButton>
            </div>
            <div className="hidden">
                <EmbedSoundCloud
                    embedUrl={currentSong.scSrc || ''}
                    artistHref={currentSong.scArtistHref || ''}
                    artistName={currentSong.scArtistName || ''}
                    songHref={currentSong.scSongHref || ''}
                    songTitle={currentSong.scSongTitle || ''}
                    id={iframeId}
                />
            </div>
            <Modal>
                <Box className="bg-white w-10/12 p-8 rounded-xl absolute">
                    <div>
                        <div className="font-bold text-2xl border-b border-slate-800 pb-3 mb-6">
                            流れている曲詳細
                        </div>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-2 items-center">
                                <FaUser className="text-2xl" />
                                <a href={currentSong.scArtistHref}>
                                    {currentSong.scArtistName}
                                </a>
                            </li>
                            <li className="flex gap-2 items-center">
                                <IoIosMusicalNotes className="text-2xl" />
                                <a href={currentSong.scSongHref}>
                                    {currentSong.scSongTitle}
                                </a>
                            </li>

                            <ul className="flex gap-2">
                                {currentSong.songGenres.value.map((genre) => (
                                    <li
                                        style={{ fontSize: '10px' }}
                                        key={`${currentSong.id}-${genre}`}
                                    >
                                        <div className="rounded-full bg-slate-500 text-white px-2 py-1">
                                            {`#${genre}`}
                                        </div>
                                    </li>
                                ))}
                                {currentSong.songImages.value.map((image) => (
                                    <li
                                        style={{ fontSize: '10px' }}
                                        key={`${currentSong.id}-${image}`}
                                    >
                                        <div className="rounded-full bg-slate-500 text-white px-2 py-1">
                                            {`#${image}`}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                    <div
                        onClick={() => setIsModalOpen(false)}
                        className="cursor-pointer mx-auto mt-10 rounded-xl text-center border border-slate-800 w-full py-3"
                    >
                        閉じる
                    </div>
                </Box>
            </Modal>
        </>
    )
}
