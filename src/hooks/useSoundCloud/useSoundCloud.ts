import React from 'react';
import {
    UseSoundCloud,
    SoundCloudStatus,
    RequestNextSong,
    OnPlayButtonClick
} from './useSoundCloud.type'




export const useSoundCloud: UseSoundCloud = ({iframeId}) => {
    const [status, setStatus] = React.useState<SoundCloudStatus>("READY");
    const [widget, setWidget] = React.useState<any>();

    // windowオブジェクトが読み込まれたら実行
    React.useEffect(() => {
        try {
            console.log("useSoundCloud: init")
            const SoundCloudWidget = require("soundcloud-widget");
            const widget = new SoundCloudWidget(iframeId)
            
            // setSCEvents(SoundCloudWidget.events);
            setWidget(widget);

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
        } catch(e) {
            console.log("useSoundCloud: error")
            setStatus("ERROR");
        }
    }, [iframeId]);


    const onPlayButtonClick: OnPlayButtonClick = React.useCallback(() => {
        if( ! widget) {
            setStatus("ERROR")
            return Promise.resolve();
        }

        return Promise.resolve(widget.toggle())
            .catch(() => {
                setStatus("ERROR")
            });
    }, [widget, status, setStatus])

    const requestNextSong: RequestNextSong = React.useCallback((url: string) => {
        if( ! widget) {
            setStatus("ERROR")
            return Promise.resolve();
        }
        
        return widget.load(url)
        .catch(() => {
            setStatus("ERROR");
        })
    }, [widget, setStatus])

    return {
        onPlayButtonClick,
        requestNextSong,
        soundCloudStatus: status
        // soundCloudStatus: "SEEK"
    }
}