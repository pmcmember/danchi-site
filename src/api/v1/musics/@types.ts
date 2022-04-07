import { MicroCMSListResponse } from 'microcms-js-sdk'

export type MusicsSchema = {
    iframeRaw: string;
    scSrc?: string;
    scArtistName?: string;
    scArtistHref?: string;
    scSongTitle?: string;
    scSongHref?: string;
    scApiUrl?: string;
}

export type MusicsAPIResponse = MicroCMSListResponse<MusicsSchema>

export type MusicsAPIContents = MusicsAPIResponse['contents']

export type MusicsAPIContent = MusicsAPIContents[0]
