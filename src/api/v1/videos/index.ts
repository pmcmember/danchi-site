/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
    /**
     * youtubeに登録してある動画一覧を取得します。
     * queryParameterにはyoutube APIのqueryParameterを一部抜粋して利用しています。
     * https://developers.google.com/youtube/v3/docs/search/list#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF
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

        query?:
            | {
                  /**
                   * maxResults パラメータには、結果セットとして返されるアイテムの最大数を指定します。<br>
                   * 0 以上 50 以下の値を指定できます。デフォルト値は 5 です。
                   */
                  maxResults?: number | undefined
                  /**
                   * パラメータには、返される結果セットに含める特定のページを指定します。<br>
                   * API レスポンスでは、nextPageToken と prevPageToken プロパティは取得可能な他のページを表します。
                   */
                  pageToken?: string | undefined
                  /**
                   * 指定されたパラメータをもとにリストの並び替えを行います。<br>
                   * 下記指定できるパラメータ一覧です。
                   * - date<br>
                   *   リソースを作成日の新しい順に並べます。
                   * - rating<br>
                   *   リソースを評価の高い順に並べます。
                   * - relevance<br>
                   *   リソースを検索クエリの関連性が高い順に並べます。このパラメータのデフォルト値です。
                   * - title<br>
                   *   リソースをタイトルのアルファベット順に並べます。
                   * - videoCount<br>
                   *   アップロード動画の番号順（降順）にチャンネルを並べます。
                   * - viewCount<br>
                   *   リソースを再生回数の多い順に並べます。
                   */
                  order?:
                      | 'date'
                      | 'rating'
                      | 'relevance'
                      | 'title'
                      | 'videoCount'
                      | 'viewCount'
                      | undefined
              }
            | undefined

        status: 200
        /** 動画一覧情報レスポンス */
        resBody: Types.VideoListResponse
    }
}
