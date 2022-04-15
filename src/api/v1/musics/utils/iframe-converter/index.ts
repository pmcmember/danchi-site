/* eslint-disable */
export type Methods = {
  /** SoundCloudから取得したiframeから情報を抜き出し返す */
  post: {
    status: 200

    /** 成功時のレスポンス */
    resBody: {
      rawIframe: string
      scApiUrl?: string | undefined
      scArtistHref?: string | undefined
      scArtistName?: string | undefined
      scSongDescription?: string | undefined
      scSongHref?: string | undefined
      scSongTitle?: string | undefined
      scSrc?: string | undefined
      scThumbnailSrc?: string | undefined
      songCategories?: {
        fieldId: 'songCategory'
        songCategory: string
      }[] | undefined
    }

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
    }

    reqBody: {
      rawIframe: string
      scApiUrl?: string | undefined
      scArtistHref?: string | undefined
      scArtistName?: string | undefined
      scSongDescription?: string | undefined
      scSongHref?: string | undefined
      scSongTitle?: string | undefined
      scSrc?: string | undefined
      scThumbnailSrc?: string | undefined
      songCategories?: {
        fieldId: 'songCategory'
        songCategory: string
      }[] | undefined
    }
  }

  /** APIGateway上のCORS用設定 */
  options: {
    status: 200

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
    }
  }
}
