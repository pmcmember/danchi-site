import React from 'react';

export type SoundCloudStatus = keyof SoundCloudEvents
export type SoundCloudEvents = {
    CLICK_BUY: "buyClicked"
    CLICK_DOWNLOAD: "downloadClicked"
    ERROR: "error"
    FINISH: "finish"
    LOAD_PROGRESS: "loadProgress"
    OPEN_SHARE_PANEL: "sharePanelOpened"
    PAUSE: "pause"
    PLAY: "play"
    PLAY_PROGRESS: "playProgress"
    READY: "ready"
    SEEK: "seek"
}

type OnPlayButtonClick = () => Promise<void>;
type RequestNextSong = (url: string) => Promise<void>;

type Props = {
    iframeId: string
}

export type UseSoundCloud = (props: Props) => {
    onPlayButtonClick: OnPlayButtonClick,
    requestNextSong: RequestNextSong,
    soundCloudStatus: SoundCloudStatus
}


export const useSoundCloud: UseSoundCloud = ({iframeId}) => {
    const [status, setStatus] = React.useState<SoundCloudStatus>("READY");
    // const [SCEvents, setSCEvents] = React.useState<SoundCloudEvents>();
    const [widget, setWidget] = React.useState<any>();

    // windowオブジェクトが読み込まれたら実行
    React.useEffect(() => {
        try {
            const SoundCloudWidget = require("soundcloud-widget");
            const widget = new SoundCloudWidget(iframeId)
            
            // setSCEvents(SoundCloudWidget.events);
            setWidget(widget);

            // イベントのバインド
            Object.keys(SoundCloudWidget.events).map((event) => {
                const _event = event as keyof SoundCloudEvents
                widget.bind(SoundCloudWidget.events[event], () => {
                    setStatus(_event)
                })
            })

            // return () => {
            //     // イベントのアンバインド
            //     Object.keys(SoundCloudWidget.events).map((event) => {
            //         const _event = event as keyof SoundCloudEvents
            //         widget.unbind(SoundCloudWidget.events[event], () => {
            //             setStatus(_event)
            //         })
            //     })
            // }
        } catch(e) {
            setStatus("ERROR");
        }
    }, []);

    React.useEffect(() => {
        console.log(status);
    }, [status])


    const onPlayButtonClick: OnPlayButtonClick = React.useCallback(() => {
        if( ! widget) {
            return Promise.resolve();
        }

        return Promise.resolve(widget.toggle())
            .catch(() => {
                setStatus("ERROR")
            });
    }, [widget, status, setStatus])

    const requestNextSong: RequestNextSong = React.useCallback((url: string) => {
        if( ! widget) {
            return Promise.resolve();
        }
        
        setStatus("LOAD_PROGRESS")
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