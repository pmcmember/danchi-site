/* eslint-disable */
export type Methods = {
  /** MicroCMSに登録されているブログ記事の取得 */
  get: {
    status: 200

    /** 成功時のレスポンス */
    resBody: {
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
