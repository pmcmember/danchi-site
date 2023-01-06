import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (
        baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL
    ).replace(/\/$/, '')
    const PATH0 = '/v1/musics/search/category'
    const GET = 'GET'

    return {
        /**
         * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
         * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする。
         * 何も引っ掛からなかった場合は404を返す。
         * @returns 検索結果の曲情報一覧レスポンス
         */
        get: (option: {
            query: Methods0['get']['query']
            headers?: Methods0['get']['reqHeaders'] | undefined
            config?: T | undefined
        }) =>
            fetch<
                Methods0['get']['resBody'],
                BasicHeaders,
                Methods0['get']['status']
            >(prefix, PATH0, GET, option).json(),
        /**
         * 検索対象のカテゴリをリクエストに含めて、MicroCMSに登録されている曲を検索する。
         * type、nameの複数指定する際はカンマ区切りで縦列を合わせてリクエストする。
         * 何も引っ掛からなかった場合は404を返す。
         * @returns 検索結果の曲情報一覧レスポンス
         */
        $get: (option: {
            query: Methods0['get']['query']
            headers?: Methods0['get']['reqHeaders'] | undefined
            config?: T | undefined
        }) =>
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
