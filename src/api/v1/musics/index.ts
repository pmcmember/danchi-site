/* eslint-disable */
export type Methods = {
  /** MicroCMSに登録されている曲一覧の取得 */
  get: {
    query?: {
      /** 取得したい件数の上限を指定する。レスポンスサイズが5MBを超えるとエラーが発生する。 */
      limit?: number | undefined
      /** 何件目から取得するかを指定する。 */
      offset?: number | undefined
      /**
       * 指標となるデータを指定し、それをもとに要素の並び替えを行う。デフォルトで昇順、プレフィックスに「-」をつけることで降順となる。
       * 参考 : https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
       */
      orders?: string | undefined
      /** コンテンツの中で取得したい要素を指定する。複数指定したい場合はカンマ区切りで指定する。 */
      fields?: string | undefined
      /** 取得したいコンテンツのIDを指定する。複数指定したい場合はカンマ区切りで指定する。 */
      ids?: string | undefined
      /**
       * 取得したいデータの条件を指定する。
       * 参考 : https://document.microcms.io/content-api/get-list-contents#hdebbdc8e86
       */
      filters?: string | undefined
    } | undefined

    status: 200

    /** 成功時のレスポンス */
    resBody: {
      contents: ({
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
