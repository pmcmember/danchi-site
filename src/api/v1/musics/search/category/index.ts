/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
   * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする。
   * 何も引っ掛からなかった場合は404を返す。
   */
  get: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    query: {
      /**
       * カテゴリによる曲検索処理の検索条件<br>
       * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする
       * 
       * - type
       *   検索するカテゴリの種別を指定(必須)<br>
       *   カンマ区切りで複数指定可能
       * 
       * - name
       *   検索するカテゴリを指定する。(必須)<br>
       *   カンマ区切りで複数指定可能
       * 
       * - condition
       *   type、nameが複数指定された場合の検索条件(任意)<br>
       *   デフォルトでorで検索される。<br>
       *   指定できる値
       *   - and
       *   - or
       * 
       * - orders
       *   取得するコンテンツの並び替えを行う。(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
       * 
       * - offset
       *   何件目から取得するかを指定(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#h41838110ca
       * 
       * - limit
       *   取得件数を指定(任意)<br>
       *   https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
       */
      MusicSearchByCategorySelector: {
        condition?: 'and' | 'or' | undefined
        name: string
        type: string
      } & {
        limit?: number | undefined
        offset?: number | undefined
        orders?: string | undefined
      }
    }

    status: 200
    /** 検索結果の曲情報一覧レスポンス */
    resBody: Types.MusicListResponse
  }
}
