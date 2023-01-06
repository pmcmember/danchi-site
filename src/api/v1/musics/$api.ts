import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'
import type { Methods as Methods2 } from './category'
import type { Methods as Methods3 } from './search'
import type { Methods as Methods4 } from './search/category'
import type { Methods as Methods5 } from './utils/cms-webhook'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (
        baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL
    ).replace(/\/$/, '')
    const PATH0 = '/v1/musics'
    const PATH1 = '/v1/musics/category'
    const PATH2 = '/v1/musics/search'
    const PATH3 = '/v1/musics/search/category'
    const PATH4 = '/v1/musics/utils/cms-webhook'
    const GET = 'GET'
    const POST = 'POST'
    const DELETE = 'DELETE'

    return {
        _id: (val0: string) => {
            const prefix0 = `${PATH0}/${val0}`

            return {
                /**
                 * MicroCMSに登録されている曲の取得
                 * @returns 曲情報レスポンス
                 */
                get: (
                    option?:
                        | {
                              headers?:
                                  | Methods1['get']['reqHeaders']
                                  | undefined
                              config?: T | undefined
                          }
                        | undefined
                ) =>
                    fetch<
                        Methods1['get']['resBody'],
                        BasicHeaders,
                        Methods1['get']['status']
                    >(prefix, prefix0, GET, option).json(),
                /**
                 * MicroCMSに登録されている曲の取得
                 * @returns 曲情報レスポンス
                 */
                $get: (
                    option?:
                        | {
                              headers?:
                                  | Methods1['get']['reqHeaders']
                                  | undefined
                              config?: T | undefined
                          }
                        | undefined
                ) =>
                    fetch<
                        Methods1['get']['resBody'],
                        BasicHeaders,
                        Methods1['get']['status']
                    >(prefix, prefix0, GET, option)
                        .json()
                        .then((r) => r.body),
                $path: () => `${prefix}${prefix0}`,
            }
        },
        category: {
            /**
             * 曲カテゴリ一覧の取得を行う。
             * @returns 曲カテゴリ一覧情報レスポンス
             */
            get: (
                option?:
                    | {
                          headers?: Methods2['get']['reqHeaders'] | undefined
                          config?: T | undefined
                      }
                    | undefined
            ) =>
                fetch<
                    Methods2['get']['resBody'],
                    BasicHeaders,
                    Methods2['get']['status']
                >(prefix, PATH1, GET, option).json(),
            /**
             * 曲カテゴリ一覧の取得を行う。
             * @returns 曲カテゴリ一覧情報レスポンス
             */
            $get: (
                option?:
                    | {
                          headers?: Methods2['get']['reqHeaders'] | undefined
                          config?: T | undefined
                      }
                    | undefined
            ) =>
                fetch<
                    Methods2['get']['resBody'],
                    BasicHeaders,
                    Methods2['get']['status']
                >(prefix, PATH1, GET, option)
                    .json()
                    .then((r) => r.body),
            /**
             * 曲カテゴリの追加を行う。
             * @param option.body - 曲カテゴリ追加リクエスト
             * @returns 曲カテゴリ情報レスポンス
             */
            post: (option: {
                body: Methods2['post']['reqBody']
                headers?: Methods2['post']['reqHeaders'] | undefined
                config?: T | undefined
            }) =>
                fetch<
                    Methods2['post']['resBody'],
                    BasicHeaders,
                    Methods2['post']['status']
                >(prefix, PATH1, POST, option).json(),
            /**
             * 曲カテゴリの追加を行う。
             * @param option.body - 曲カテゴリ追加リクエスト
             * @returns 曲カテゴリ情報レスポンス
             */
            $post: (option: {
                body: Methods2['post']['reqBody']
                headers?: Methods2['post']['reqHeaders'] | undefined
                config?: T | undefined
            }) =>
                fetch<
                    Methods2['post']['resBody'],
                    BasicHeaders,
                    Methods2['post']['status']
                >(prefix, PATH1, POST, option)
                    .json()
                    .then((r) => r.body),
            /**
             * 曲カテゴリの削除を行う。
             * @returns 曲カテゴリ情報レスポンス
             */
            delete: (option: {
                query: Methods2['delete']['query']
                headers?: Methods2['delete']['reqHeaders'] | undefined
                config?: T | undefined
            }) =>
                fetch<
                    Methods2['delete']['resBody'],
                    BasicHeaders,
                    Methods2['delete']['status']
                >(prefix, PATH1, DELETE, option).json(),
            /**
             * 曲カテゴリの削除を行う。
             * @returns 曲カテゴリ情報レスポンス
             */
            $delete: (option: {
                query: Methods2['delete']['query']
                headers?: Methods2['delete']['reqHeaders'] | undefined
                config?: T | undefined
            }) =>
                fetch<
                    Methods2['delete']['resBody'],
                    BasicHeaders,
                    Methods2['delete']['status']
                >(prefix, PATH1, DELETE, option)
                    .json()
                    .then((r) => r.body),
            $path: (
                option?:
                    | { method: 'delete'; query: Methods2['delete']['query'] }
                    | undefined
            ) =>
                `${prefix}${PATH1}${
                    option && option.query
                        ? `?${dataToURLString(option.query)}`
                        : ''
                }`,
        },
        search: {
            category: {
                /**
                 * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
                 * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする。
                 * 何も引っ掛からなかった場合は404を返す。
                 * @returns 検索結果の曲情報一覧レスポンス
                 */
                get: (option: {
                    query: Methods4['get']['query']
                    headers?: Methods4['get']['reqHeaders'] | undefined
                    config?: T | undefined
                }) =>
                    fetch<
                        Methods4['get']['resBody'],
                        BasicHeaders,
                        Methods4['get']['status']
                    >(prefix, PATH3, GET, option).json(),
                /**
                 * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
                 * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする。
                 * 何も引っ掛からなかった場合は404を返す。
                 * @returns 検索結果の曲情報一覧レスポンス
                 */
                $get: (option: {
                    query: Methods4['get']['query']
                    headers?: Methods4['get']['reqHeaders'] | undefined
                    config?: T | undefined
                }) =>
                    fetch<
                        Methods4['get']['resBody'],
                        BasicHeaders,
                        Methods4['get']['status']
                    >(prefix, PATH3, GET, option)
                        .json()
                        .then((r) => r.body),
                $path: (
                    option?:
                        | {
                              method?: 'get' | undefined
                              query: Methods4['get']['query']
                          }
                        | undefined
                ) =>
                    `${prefix}${PATH3}${
                        option && option.query
                            ? `?${dataToURLString(option.query)}`
                            : ''
                    }`,
            },
            /**
             * 任意の文字列でMicroCMSに登録されている曲を検索する。<br>
             * タイトル・説明など、MicroCMS上のテキストフィールドにて登録したデータに対して検索をかける。<br>
             * 検索対象文字列が含んでいれば結果として出力する。<br>
             * 何も引っ掛からなかった場合は404でレスポンスを返す。
             * @returns 検索結果の曲情報一覧レスポンス
             */
            get: (option: {
                query: Methods3['get']['query']
                headers?: Methods3['get']['reqHeaders'] | undefined
                config?: T | undefined
            }) =>
                fetch<
                    Methods3['get']['resBody'],
                    BasicHeaders,
                    Methods3['get']['status']
                >(prefix, PATH2, GET, option).json(),
            /**
             * 任意の文字列でMicroCMSに登録されている曲を検索する。<br>
             * タイトル・説明など、MicroCMS上のテキストフィールドにて登録したデータに対して検索をかける。<br>
             * 検索対象文字列が含んでいれば結果として出力する。<br>
             * 何も引っ掛からなかった場合は404でレスポンスを返す。
             * @returns 検索結果の曲情報一覧レスポンス
             */
            $get: (option: {
                query: Methods3['get']['query']
                headers?: Methods3['get']['reqHeaders'] | undefined
                config?: T | undefined
            }) =>
                fetch<
                    Methods3['get']['resBody'],
                    BasicHeaders,
                    Methods3['get']['status']
                >(prefix, PATH2, GET, option)
                    .json()
                    .then((r) => r.body),
            $path: (
                option?:
                    | {
                          method?: 'get' | undefined
                          query: Methods3['get']['query']
                      }
                    | undefined
            ) =>
                `${prefix}${PATH2}${
                    option && option.query
                        ? `?${dataToURLString(option.query)}`
                        : ''
                }`,
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
                post: (option: {
                    body: Methods5['post']['reqBody']
                    headers?: Methods5['post']['reqHeaders'] | undefined
                    config?: T | undefined
                }) =>
                    fetch<
                        Methods5['post']['resBody'],
                        BasicHeaders,
                        Methods5['post']['status']
                    >(prefix, PATH4, POST, option).json(),
                /**
                 * MiscroCMSからのwebhookリクエストを受けて、下記処理を行う
                 * - SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
                 * - Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
                 * @param option.body - MicroCMSからのWebhookリクエスト
                 * @returns 成功時のレスポンス
                 */
                $post: (option: {
                    body: Methods5['post']['reqBody']
                    headers?: Methods5['post']['reqHeaders'] | undefined
                    config?: T | undefined
                }) =>
                    fetch<
                        Methods5['post']['resBody'],
                        BasicHeaders,
                        Methods5['post']['status']
                    >(prefix, PATH4, POST, option)
                        .json()
                        .then((r) => r.body),
                $path: () => `${prefix}${PATH4}`,
            },
        },
        /**
         * MicroCMSに登録されている曲一覧の取得
         * @returns 曲情報一覧レスポンス
         */
        get: (
            option?:
                | {
                      query?: Methods0['get']['query'] | undefined
                      headers?: Methods0['get']['reqHeaders'] | undefined
                      config?: T | undefined
                  }
                | undefined
        ) =>
            fetch<
                Methods0['get']['resBody'],
                BasicHeaders,
                Methods0['get']['status']
            >(prefix, PATH0, GET, option).json(),
        /**
         * MicroCMSに登録されている曲一覧の取得
         * @returns 曲情報一覧レスポンス
         */
        $get: (
            option?:
                | {
                      query?: Methods0['get']['query'] | undefined
                      headers?: Methods0['get']['reqHeaders'] | undefined
                      config?: T | undefined
                  }
                | undefined
        ) =>
            fetch<
                Methods0['get']['resBody'],
                BasicHeaders,
                Methods0['get']['status']
            >(prefix, PATH0, GET, option)
                .json()
                .then((r) => r.body),
        $path: (
            option?:
                | {
                      method?: 'get' | undefined
                      query: Methods0['get']['query']
                  }
                | undefined
        ) =>
            `${prefix}${PATH0}${
                option && option.query
                    ? `?${dataToURLString(option.query)}`
                    : ''
            }`,
    }
}

export type ApiInstance = ReturnType<typeof api>
export default api
