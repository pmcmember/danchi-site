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

export type OnPlayButtonClick = () => Promise<void>;

export type RequestNextSong = (url: string) => Promise<void>;

export type UseSoundCloudProps = {
    iframeId: string
}

export type UseSoundCloud = (props: UseSoundCloudProps) => {
    onPlayButtonClick: OnPlayButtonClick,
    requestNextSong: RequestNextSong,
    soundCloudStatus: SoundCloudStatus
}
