/* eslint-disable */
export type Methods = {
  /** MicroCMSに登録されている曲の取得 */
  get: {
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
    } & {
      createdAt: string
      publishedAt: string
      revisedAt: string
      updatedAt: string
    }

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
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
