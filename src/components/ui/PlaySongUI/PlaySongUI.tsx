import React from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { RealDentButton } from '@/components/ui/Buttons';
import { useSoundCloud } from '@/hooks/useSoundCloud';
import { EmbedSoundCloud } from '@/components/ui/EmbedSoundCloud'
import { Modal, Box, CircularProgress } from '@mui/material'
import { MusicsSchema } from '@/api/@types'

type Props = {
    soundCloudInfos: MusicsSchema[]
}

export const PlaySongUI: React.VFC<Props> = ({soundCloudInfos}) => {
    const iframeId = "play-song-ui"
    const {onPlayButtonClick, requestNextSong, soundCloudStatus} = useSoundCloud(iframeId);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [soundCloudInfo, setSoundCloudInfo] = React.useState<MusicsSchema>(soundCloudInfos[Math.floor(Math.random() * soundCloudInfos.length)]);
    
    const onPlayButtonClickHandler = React.useCallback(() => {
        soundCloudStatus === "PAUSE" ? (() => {
            const scInfo = soundCloudInfos[Math.floor(Math.random() * soundCloudInfos.length)]
            
            setSoundCloudInfo(scInfo);
            requestNextSong(scInfo.scApiUrl || "")
            .then(() => {
                onPlayButtonClick();
            })
        })() : (() => {
            onPlayButtonClick()
        })();
    }, [soundCloudStatus, setSoundCloudInfo, requestNextSong, onPlayButtonClick]);

    return (
        <>
            <div className="fixed bottom-5 right-5 sm:bottom-16 sm:right-5">
                {soundCloudStatus === "PLAY" && (
                    <div
                        className="bg-white cursor-pointer py-2 -translate-y-2 flex justify-center items-center rounded-full border border-slate-800"
                        style={{fontSize: "10px", width: "90px"}}
                        onClick={() => setIsModalOpen(true)}
                    >
                        楽曲詳細
                    </div>
                )}
                <RealDentButton
                    size="90px"
                    disabled={soundCloudStatus === "SEEK" || soundCloudStatus === "ERROR"}
                    onClick={onPlayButtonClickHandler}
                >
                    <span className="translate-y-1" style={{fontSize: "10px"}}>ランダム再生</span>
                    <span className="text-5xl text-blue-900">
                        {soundCloudStatus === "PLAY" ? (
                            <BsFillPauseFill/>
                        ) : soundCloudStatus === "SEEK" ? (
                            <CircularProgress/>
                        ) : soundCloudStatus === "ERROR"? (
                            <div className="relative">
                                <div
                                    className="inline-block absolute bg-black border-y border-white"
                                    style={{width: "40px", height: "3px", top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(45deg)"}}
                                />
                                <BsFillPlayFill/>
                            </div>
                        ) : (
                            <BsFillPlayFill/>
                        )}
                    </span>
                </RealDentButton>
            </div>
            <div className="hidden">
                <EmbedSoundCloud
                    embedUrl={soundCloudInfo.scSrc || ""}
                    artistHref={soundCloudInfo.scArtistHref || ""}
                    artistName={soundCloudInfo.scArtistName || ""}
                    songHref={soundCloudInfo.scSongHref || ""}
                    songName={soundCloudInfo.scSongTitle || ""}
                    id={iframeId}
                />
            </div>
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                style={{maxWidth: "700px", margin: "auto"}}
            >
                <Box className="bg-white w-10/12 p-8 rounded-xl absolute" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <div>
                        <div className="font-bold text-2xl border-b border-slate-800 pb-3">流れている曲詳細</div>
                        <ul>
                            <li>アーティスト：<a href={soundCloudInfo.scArtistHref}>{soundCloudInfo.scArtistName}</a></li>
                            <li>曲名：<a href={soundCloudInfo.scSongHref}>{soundCloudInfo.scSongTitle}</a></li> 
                        </ul>
                    </div>
                    <div
                        onClick={() => setIsModalOpen(false)}
                        className="cursor-pointer mx-auto mt-10 rounded-xl text-center border border-slate-800 w-10/12 py-6"
                    >
                        閉じる
                    </div>
                </Box>
            </Modal>
        </>
    )
}