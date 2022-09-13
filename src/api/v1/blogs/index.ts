/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** MicroCMSに登録されているブログ記事一覧の取得 */
  get: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    query?: {
      /**
       * ブログ一覧を取得する際の取得条件
       * 
       * - offset
       *   何件目から取得するかを指定(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#h41838110ca
       * 
       * - limit
       *   取得件数を指定(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
       * 
       * - orders
       *   取得するコンテンツの並び替えを行う。(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
       * 
       * - fields
       *   コンテンツの中で取得する要素を指定(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#h7462d83de4
       * 
       * - ids
       *   コンテンツのIDをカンマ区切りで指定(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#h6b992e0fe4
       * 
       * - filters
       *   コンテンツの絞り込み条件を指定(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#hdebbdc8e86
       */
      BlogListSelector?: {
        fields?: string | undefined
        filters?: string | undefined
        ids?: string | undefined
        limit?: number | undefined
        offset?: number | undefined
        orders?: string | undefined
      } | undefined
    } | undefined

    status: 200
    /** ブログ一覧情報レスポンス */
    resBody: Types.BlogListResponse
  }
}
