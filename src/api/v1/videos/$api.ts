import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (
        baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL
    ).replace(/\/$/, '')
    const PATH0 = '/v1/videos'
    const GET = 'GET'

    return {
        /**
         * youtubeに登録してある動画一覧を取得します。
         * queryParameterにはyoutube APIのqueryParameterを一部抜粋して利用しています。
         * https://developers.google.com/youtube/v3/docs/search/list#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF
         * @returns 動画一覧情報レスポンス
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
         * youtubeに登録してある動画一覧を取得します。
         * queryParameterにはyoutube APIのqueryParameterを一部抜粋して利用しています。
         * https://developers.google.com/youtube/v3/docs/search/list#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF
         * @returns 動画一覧情報レスポンス
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
