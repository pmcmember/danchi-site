/* eslint-disable */
export type Methods = {
  /** MicroCMSに登録されている曲一覧の取得 */
  get: {
    status: 200

    /** 成功時のレスポンス */
    resBody: {
      contents: ({
        rawIframe: string
        scApiUrl?: string | undefined
        scArtistHref?: string | undefined
        scArtistName?: string | undefined
        scSongHref?: string | undefined
        scSongTitle?: string | undefined
        scSrc?: string | undefined
      } & {
        id: string
      } & {
        createdAt: string
        publishedAt: string
        revisedAt: string
        updatedAt: string
      })[]
      limit: number
      offset: number
      totalCount: number
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
