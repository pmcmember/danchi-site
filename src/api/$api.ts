import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './v1/blogs'
import type { Methods as Methods1 } from './v1/blogs/_id@string'
import type { Methods as Methods2 } from './v1/musics'
import type { Methods as Methods3 } from './v1/musics/_id@string'
import type { Methods as Methods4 } from './v1/musics/category'
import type { Methods as Methods5 } from './v1/musics/search'
import type { Methods as Methods6 } from './v1/musics/search/category'
import type { Methods as Methods7 } from './v1/musics/utils/cms-webhook'
import type { Methods as Methods8 } from './v1/videos'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/blogs'
  const PATH1 = '/v1/musics'
  const PATH2 = '/v1/musics/category'
  const PATH3 = '/v1/musics/search'
  const PATH4 = '/v1/musics/search/category'
  const PATH5 = '/v1/musics/utils/cms-webhook'
  const PATH6 = '/v1/videos'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    v1: {
      blogs: {
        _id: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`

          return {
            /**
             * MicroCMSに登録されているブログ記事の取得
             * @returns ブログ情報レスポンス
             */
            get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * MicroCMSに登録されているブログ記事の取得
             * @returns ブログ情報レスポンス
             */
            $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        /**
         * MicroCMSに登録されているブログ記事一覧の取得
         * @returns ブログ一覧情報レスポンス
         */
        get: (option?: { query?: Methods0['get']['query'] | undefined, headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * MicroCMSに登録されているブログ記事一覧の取得
         * @returns ブログ一覧情報レスポンス
         */
        $get: (option?: { query?: Methods0['get']['query'] | undefined, headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      musics: {
        _id: (val2: string) => {
          const prefix2 = `${PATH1}/${val2}`

          return {
            /**
             * MicroCMSに登録されている曲の取得
             * @returns 曲情報レスポンス
             */
            get: (option?: { headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * MicroCMSに登録されている曲の取得
             * @returns 曲情報レスポンス
             */
            $get: (option?: { headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        category: {
          /**
           * 曲カテゴリ一覧の取得を行う。
           * @returns 曲カテゴリ一覧情報レスポンス
           */
          get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
          /**
           * 曲カテゴリ一覧の取得を行う。
           * @returns 曲カテゴリ一覧情報レスポンス
           */
          $get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
          /**
           * 曲カテゴリの追加を行う。
           * @param option.body - 曲カテゴリ追加リクエスト
           * @returns 曲カテゴリ情報レスポンス
           */
          post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json(),
          /**
           * 曲カテゴリの追加を行う。
           * @param option.body - 曲カテゴリ追加リクエスト
           * @returns 曲カテゴリ情報レスポンス
           */
          $post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          /**
           * 曲カテゴリの削除を行う。
           * @returns 曲カテゴリ情報レスポンス
           */
          delete: (option: { query: Methods4['delete']['query'], headers?: Methods4['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods4['delete']['resBody'], BasicHeaders, Methods4['delete']['status']>(prefix, PATH2, DELETE, option).json(),
          /**
           * 曲カテゴリの削除を行う。
           * @returns 曲カテゴリ情報レスポンス
           */
          $delete: (option: { query: Methods4['delete']['query'], headers?: Methods4['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods4['delete']['resBody'], BasicHeaders, Methods4['delete']['status']>(prefix, PATH2, DELETE, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods4['delete']['query'] } | undefined) =>
            `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        search: {
          category: {
            /**
             * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
             * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする。
             * 何も引っ掛からなかった場合は404を返す。
             * @returns 検索結果の曲情報一覧レスポンス
             */
            get: (option: { query: Methods6['get']['query'], headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH4, GET, option).json(),
            /**
             * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
             * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする。
             * 何も引っ掛からなかった場合は404を返す。
             * @returns 検索結果の曲情報一覧レスポンス
             */
            $get: (option: { query: Methods6['get']['query'], headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | undefined) =>
              `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * 任意の文字列でMicroCMSに登録されている曲を検索する。<br>
           * タイトル・説明など、MicroCMS上のテキストフィールドにて登録したデータに対して検索をかける。<br>
           * 検索対象文字列が含んでいれば結果として出力する。<br>
           * 何も引っ掛からなかった場合は404でレスポンスを返す。
           * @returns 検索結果の曲情報一覧レスポンス
           */
          get: (option: { query: Methods5['get']['query'], headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json(),
          /**
           * 任意の文字列でMicroCMSに登録されている曲を検索する。<br>
           * タイトル・説明など、MicroCMS上のテキストフィールドにて登録したデータに対して検索をかける。<br>
           * 検索対象文字列が含んでいれば結果として出力する。<br>
           * 何も引っ掛からなかった場合は404でレスポンスを返す。
           * @returns 検索結果の曲情報一覧レスポンス
           */
          $get: (option: { query: Methods5['get']['query'], headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
            `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        utils: {
          cms_webhook: {
            /**
             * MiscroCMSからのwebhookリクエストを受けて、下記処理を行う
             * - SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
             * - Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
             * @param option.body - MicroCMSからのWebhookリクエスト
             * @returns 成功時のレスポンス
             */
            post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH5, POST, option).json(),
            /**
             * MiscroCMSからのwebhookリクエストを受けて、下記処理を行う
             * - SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
             * - Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
             * @param option.body - MicroCMSからのWebhookリクエスト
             * @returns 成功時のレスポンス
             */
            $post: (option: { body: Methods7['post']['reqBody'], headers?: Methods7['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH5}`
          }
        },
        /**
         * MicroCMSに登録されている曲一覧の取得
         * @returns 曲情報一覧レスポンス
         */
        get: (option?: { query?: Methods2['get']['query'] | undefined, headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * MicroCMSに登録されている曲一覧の取得
         * @returns 曲情報一覧レスポンス
         */
        $get: (option?: { query?: Methods2['get']['query'] | undefined, headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      videos: {
        /**
         * youtubeに登録してある動画一覧を取得します。
         * queryParameterにはyoutube APIのqueryParameterを一部抜粋して利用しています。
         * https://developers.google.com/youtube/v3/docs/search/list#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF
         * @returns 動画一覧情報レスポンス
         */
        get: (option?: { query?: Methods8['get']['query'] | undefined, headers?: Methods8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * youtubeに登録してある動画一覧を取得します。
         * queryParameterにはyoutube APIのqueryParameterを一部抜粋して利用しています。
         * https://developers.google.com/youtube/v3/docs/search/list#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF
         * @returns 動画一覧情報レスポンス
         */
        $get: (option?: { query?: Methods8['get']['query'] | undefined, headers?: Methods8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods8['get']['query'] } | undefined) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
