import React from 'react'
import {
    UseSoundCloud,
    SoundCloudStatus,
    RequestNextSong,
    OnPlayButtonClick,
} from './useSoundCloud.type'

export const useSoundCloud: UseSoundCloud = ({ iframeId }) => {
    const [status, setStatus] = React.useState<SoundCloudStatus>('READY')
    const [widget, setWidget] = React.useState<any>()

    // windowオブジェクトが読み込まれたら実行
    React.useEffect(() => {
        try {
            console.log('useSoundCloud: init')
            const SoundCloudWidget = require('soundcloud-widget')
            const widget = new SoundCloudWidget(iframeId)

            setWidget(widget)

            // イベントのバインド
            Object.keys(SoundCloudWidget.events).map((event) => {
                const _event = event as SoundCloudStatus

                /**
                 * widgetAPIのイベント変更に対するバインド:
                 *      サウンドクラウドイベントが変更する際にstatusステートも変更するようにバインド
                 */
                widget.bind(SoundCloudWidget.events[_event], () => {
                    setStatus(_event)
                })
            })
        } catch (e) {
            console.log('useSoundCloud: error')
            setStatus('ERROR')
        }
    }, [iframeId])

    const onPlayButtonClick: OnPlayButtonClick = React.useCallback(async () => {
        if (!widget) {
            setStatus('ERROR')
            return
        }

        try {
            widget.toggle()
        } catch (e) {
            console.error(e)
            setStatus('ERROR')
        }
    }, [widget, status, setStatus])

    const requestNextSong: RequestNextSong = React.useCallback(
        async (url: string) => {
            if (!widget) {
                setStatus('ERROR')
                return
            }

            try {
                return widget.load(url)
            } catch (e) {
                console.error(e)
                setStatus('ERROR')
            }
        },
        [widget, setStatus]
    )

    return {
        onPlayButtonClick,
        requestNextSong,
        soundCloudStatus: status,
    }
}
