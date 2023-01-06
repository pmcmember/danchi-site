/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
    /** MicroCMSに登録されているブログ記事の取得 */
    get: {
        reqHeaders?:
            | {
                  /** 認証鍵 */
                  'X-Custom-Authorization': string
                  /** API鍵 */
                  'X-Api-Key'?: string | undefined
              }
            | undefined

        status: 200
        /** ブログ情報レスポンス */
        resBody: Types.BlogResponse
    }
}
