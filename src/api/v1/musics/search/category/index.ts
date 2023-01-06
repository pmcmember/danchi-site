/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
    /**
     * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
     * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする。
     * 何も引っ掛からなかった場合は404を返す。
     */
    get: {
        reqHeaders?:
            | {
                  /** 認証鍵 */
                  'X-Custom-Authorization': string
                  /** API鍵 */
                  'X-Api-Key'?: string | undefined
              }
            | undefined

        query: {
            /**
             * 検索するカテゴリの種別を指定<br>
             * カンマ区切りで複数指定可能
             */
            type: string
            /**
             * 検索するカテゴリを指定する。<br>
             * カンマ区切りで複数指定可能
             */
            name: string
            /**
             * type、nameが複数指定された場合の検索条件<br>
             * デフォルトでorで検索される。<br>
             */
            condition?: 'or' | 'and' | undefined
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
