import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import { CircularProgress } from '@mui/material'
import { SoundCloudEvents } from '@/hooks'

type Props = {
    /**
     * ("PLAY") -> Pause Icon |  ("ERROR") -> Error Icon | ("LOAD_PROGRESS" | "PLAY") -> Loading Icon | (other any string) -> ? Play Icon
     */
    status: keyof SoundCloudEvents
}

export const PlayerTransIcon: React.VFC<Props> = ({ status }) => {
    return (
        <>
            {status === 'PLAY_PROGRESS' ? (
                <BsFillPauseFill />
            ) : status === 'LOAD_PROGRESS' || status === 'PLAY' ? (
                <CircularProgress style={{ width: '1em', height: '1em' }} />
            ) : status === 'ERROR' ? (
                <div className="relative">
                    <div
                        className="inline-block absolute bg-black border-y border-white"
                        style={{
                            width: '100%',
                            height: '3px',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) rotate(45deg)',
                        }}
                    />
                    <BsFillPlayFill />
                </div>
            ) : (
                <BsFillPlayFill />
                // ) : (
                //     <BsQuestionLg/>
            )}
        </>
    )
}
