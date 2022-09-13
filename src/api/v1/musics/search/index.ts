/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * 任意の文字列でMicroCMSに登録されている曲を検索する。<br>
   * タイトル・説明など、MicroCMS上のテキストフィールドにて登録したデータに対して検索をかける。<br>
   * 検索対象文字列が含んでいれば結果として出力する。<br>
   * 何も引っ掛からなかった場合は404でレスポンスを返す。
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
       * musics検索の検索条件<br>
       * 
       * - value
       *   検索対象の文字(必須)
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
      MusicSearchByAnyValueSelector: {
        value: string
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
