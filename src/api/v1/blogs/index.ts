/* eslint-disable */
export type Methods = {
  /** MicroCMSに登録されているブログ記事一覧の取得 */
  get: {
    query?: {
      /** 取得したい件数の上限を指定する。レスポンスサイズが5MBを超えるとエラーが発生する。 */
      limit?: number | undefined
      /** 何件目から取得するかを指定する。 */
      offset?: number | undefined
      /**
       * 取得したいデータの並び替えを行う。
       * 参考 : https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
       */
      orders?: string | undefined
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
        author: string[]
        categories: string[]
        content: string
        description: string

        /** microCMS image */
        image?: {
          height?: number | undefined
          url: string
          width?: number | undefined
        } | undefined

        tags?: {
          fieldId: 'tag'
          tag: string
        }[] | undefined
        title: string
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
