/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * youtubeに登録してある動画一覧を取得します。
   * queryParameterにはyoutube APIのqueryParameterを一部抜粋して利用しています。
   * https://developers.google.com/youtube/v3/docs/search/list#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF
   */
  get: {
    reqHeaders?: {
      /** 認証鍵 */
      'X-Custom-Authorization': string
      /** API鍵 */
      'X-Api-Key'?: string | undefined
    } | undefined

    query?: {
      /**
       * 動画一覧を取得する際の検索条件
       * 
       * - maxResults
       *   maxResults パラメータには、結果セットとして返されるアイテムの最大数を指定します。
       *   0 以上 50 以下の値を指定できます。デフォルト値は 5 です。
       * 
       * - pageToken
       *   pageToken パラメータには、返される結果セットに含める特定のページを指定します。
       *   API レスポンスでは、nextPageToken と prevPageToken プロパティは取得可能な他のページを表します。
       * 
       * - order
       *   指定されたパラメータをもとにリストの並び替えを行います。
       *   下記指定できるパラメータ一覧です。
       *   - date
       *     リソースを作成日の新しい順に並べます。
       *   - rating
       *     リソースを評価の高い順に並べます。
       *   - relevance
       *     リソースを検索クエリの関連性が高い順に並べます。このパラメータのデフォルト値です。
       *   - title
       *     リソースをタイトルのアルファベット順に並べます。
       *   - videoCount
       *     アップロード動画の番号順（降順）にチャンネルを並べます。
       *   - viewCount
       *     リソースを再生回数の多い順に並べます。
       */
      VideoListSelector?: {
        maxResults?: number | undefined
        order?: 'date' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount' | undefined
        pageToken?: string | undefined
      } | undefined
    } | undefined

    status: 200
    /** 動画一覧情報レスポンス */
    resBody: Types.VideoListResponse
  }
}
