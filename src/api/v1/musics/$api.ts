import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './detail/_id@string'
import type { Methods as Methods2 } from './song-categories'
import type { Methods as Methods3 } from './utils/cms-webhook'
import type { Methods as Methods4 } from './utils/iframe-converter'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/musics'
  const PATH1 = '/v1/musics/detail'
  const PATH2 = '/v1/musics/song-categories'
  const PATH3 = '/v1/musics/utils/cms-webhook'
  const PATH4 = '/v1/musics/utils/iframe-converter'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const OPTIONS = 'OPTIONS'

  return {
    detail: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * MicroCMSに登録されている曲の取得
           * @returns 成功時のレスポンス
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * MicroCMSに登録されている曲の取得
           * @returns 成功時のレスポンス
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * APIGateway上のCORS用設定
           */
          options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods1['options']['resHeaders'], Methods1['options']['status']>(prefix, prefix1, OPTIONS, option).send(),
          /**
           * APIGateway上のCORS用設定
           */
          $options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods1['options']['resHeaders'], Methods1['options']['status']>(prefix, prefix1, OPTIONS, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    song_categories: {
      /**
       * 曲カテゴリ一覧の取得を行う。
       * @returns 成功時のレスポンス
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], Methods2['get']['resHeaders'], Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 曲カテゴリ一覧の取得を行う。
       * @returns 成功時のレスポンス
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], Methods2['get']['resHeaders'], Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * 曲カテゴリの追加を行う。
       * @returns 成功時のレスポンス
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * 曲カテゴリの追加を行う。
       * @returns 成功時のレスポンス
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      /**
       * 曲カテゴリの削除を行う。
       * @returns 成功時のレスポンス
       */
      delete: (option: { query: Methods2['delete']['query'], config?: T | undefined }) =>
        fetch<Methods2['delete']['resBody'], Methods2['delete']['resHeaders'], Methods2['delete']['status']>(prefix, PATH2, DELETE, option).json(),
      /**
       * 曲カテゴリの削除を行う。
       * @returns 成功時のレスポンス
       */
      $delete: (option: { query: Methods2['delete']['query'], config?: T | undefined }) =>
        fetch<Methods2['delete']['resBody'], Methods2['delete']['resHeaders'], Methods2['delete']['status']>(prefix, PATH2, DELETE, option).json().then(r => r.body),
      /**
       * APIGateway上のCORS用設定
       */
      options: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, Methods2['options']['resHeaders'], Methods2['options']['status']>(prefix, PATH2, OPTIONS, option).send(),
      /**
       * APIGateway上のCORS用設定
       */
      $options: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, Methods2['options']['resHeaders'], Methods2['options']['status']>(prefix, PATH2, OPTIONS, option).send().then(r => r.body),
      $path: (option?: { method: 'delete'; query: Methods2['delete']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    utils: {
      cms_webhook: {
        /**
         * MiscroCMSからのwebhookリクエストを受けて、
         * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
         * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
         * @returns 成功時のレスポンス
         */
        post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods3['post']['resBody'], Methods3['post']['resHeaders'], Methods3['post']['status']>(prefix, PATH3, POST, option).json(),
        /**
         * MiscroCMSからのwebhookリクエストを受けて、
         * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
         * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
         * @returns 成功時のレスポンス
         */
        $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods3['post']['resBody'], Methods3['post']['resHeaders'], Methods3['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
        /**
         * APIGateway上のCORS用設定
         */
        options: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods3['options']['resHeaders'], Methods3['options']['status']>(prefix, PATH3, OPTIONS, option).send(),
        /**
         * APIGateway上のCORS用設定
         */
        $options: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods3['options']['resHeaders'], Methods3['options']['status']>(prefix, PATH3, OPTIONS, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      },
      iframe_converter: {
        /**
         * SoundCloudから取得したiframeから情報を抜き出し返す
         * @returns 成功時のレスポンス
         */
        post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * SoundCloudから取得したiframeから情報を抜き出し返す
         * @returns 成功時のレスポンス
         */
        $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        /**
         * APIGateway上のCORS用設定
         */
        options: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods4['options']['resHeaders'], Methods4['options']['status']>(prefix, PATH4, OPTIONS, option).send(),
        /**
         * APIGateway上のCORS用設定
         */
        $options: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods4['options']['resHeaders'], Methods4['options']['status']>(prefix, PATH4, OPTIONS, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      }
    },
    /**
     * MicroCMSに登録されている曲一覧の取得
     * @returns 成功時のレスポンス
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * MicroCMSに登録されている曲一覧の取得
     * @returns 成功時のレスポンス
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * APIGateway上のCORS用設定
     */
    options: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, Methods0['options']['resHeaders'], Methods0['options']['status']>(prefix, PATH0, OPTIONS, option).send(),
    /**
     * APIGateway上のCORS用設定
     */
    $options: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, Methods0['options']['resHeaders'], Methods0['options']['status']>(prefix, PATH0, OPTIONS, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
