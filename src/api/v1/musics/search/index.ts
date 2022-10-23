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
      /** 検索対象の文字 */
      value: string
      /**
       * 取得したい件数の上限を指定する。レスポンスサイズが5MBを超えるとエラーが発生する。<br>
       * https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
       */
      limit?: number | undefined
      /**
       * 取得したいデータの並び替えを行う。<br>
       * https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
       */
      orders?: string | undefined
      /**
       * 何件目から取得するかを指定<br>
       * https://document.microcms.io/content-api/get-list-contents#h41838110ca
       */
      offset?: number | undefined
    }

    status: 200
    /** 検索結果の曲情報一覧レスポンス */
    resBody: Types.MusicListResponse
  }
}
