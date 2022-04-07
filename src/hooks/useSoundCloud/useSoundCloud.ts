import React from 'react';


export type SoundCloudStatus = keyof SoundCloudEvents | "INACTIVE";
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

export type UseSoundCloud = (iframeId: string) => {
    onPlayButtonClick: OnPlayButtonClick,
    requestNextSong: RequestNextSong,
    soundCloudStatus: SoundCloudStatus
}


export const useSoundCloud: UseSoundCloud = (iframeId) => {
    const [status, setStatus] = React.useState<SoundCloudStatus>("INACTIVE");
    // const [SCEvents, setSCEvents] = React.useState<SoundCloudEvents>();
    const [widget, setWidget] = React.useState<any>();

    // windowオブジェクトが読み込まれたら実行
    React.useEffect(() => {
        try {
            const SoundCloudWidget = require("soundcloud-widget");
            const widget = new SoundCloudWidget(iframeId)
            
            // setSCEvents(SoundCloudWidget.events);
            setWidget(widget);
            setStatus("READY");

            // イベントのバインド
            widget.bind(SoundCloudWidget.events.FINISH, () => {
                setStatus("FINISH")
            })

            widget.bind(SoundCloudWidget.events.ERROR, () => {
                setStatus("ERROR")
            })
        } catch(e) {
            setStatus("ERROR");
        }
    }, []);

    React.useEffect(() => {

    }, [])
    
    const onPlayButtonClick: OnPlayButtonClick = React.useCallback(() => {
        if( ! widget) {
            return Promise.resolve();
        }

        const result = status === "PLAY" || status === "PLAY_PROGRESS" ? (
            Promise.resolve(widget.pause())
                .then(() => {
                    setStatus("PAUSE")
                })
                .catch(() => {
                    setStatus("ERROR")
                })
        ) : (
            Promise.resolve(widget.play())
                .then(() => {
                    setStatus("PLAY")
                })
                .catch(() => {
                    setStatus("ERROR")
                })
        ) 

        return result;
    }, [widget, status, setStatus])

    const requestNextSong: RequestNextSong = React.useCallback((url: string) => {
        if( ! widget) {
            return Promise.resolve();
        }

        setStatus("SEEK");

        return widget.load(url)
            .then(() => {
                setStatus("READY")
            })
            .catch(() => {
                setStatus("ERROR");
            })
    }, [widget, setStatus])

    return {
        onPlayButtonClick,
        requestNextSong,
        soundCloudStatus: status
    }
}