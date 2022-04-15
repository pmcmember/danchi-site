import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './blogs'
import type { Methods as Methods1 } from './blogs/detail/_id'
import type { Methods as Methods2 } from './musics'
import type { Methods as Methods3 } from './musics/detail/_id@string'
import type { Methods as Methods4 } from './musics/song-categories'
import type { Methods as Methods5 } from './musics/utils/cms-webhook'
import type { Methods as Methods6 } from './musics/utils/iframe-converter'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/blogs'
  const PATH1 = '/v1/blogs/detail'
  const PATH2 = '/v1/musics'
  const PATH3 = '/v1/musics/detail'
  const PATH4 = '/v1/musics/song-categories'
  const PATH5 = '/v1/musics/utils/cms-webhook'
  const PATH6 = '/v1/musics/utils/iframe-converter'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const OPTIONS = 'OPTIONS'

  return {
    blogs: {
      detail: {
        _id: (val2: number | string) => {
          const prefix2 = `${PATH1}/${val2}`

          return {
            /**
             * MicroCMSに登録されているブログ記事の取得
             * @returns 成功時のレスポンス
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * MicroCMSに登録されているブログ記事の取得
             * @returns 成功時のレスポンス
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * APIGateway上のCORS用設定
             */
            options: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, Methods1['options']['resHeaders'], Methods1['options']['status']>(prefix, prefix2, OPTIONS, option).send(),
            /**
             * APIGateway上のCORS用設定
             */
            $options: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, Methods1['options']['resHeaders'], Methods1['options']['status']>(prefix, prefix2, OPTIONS, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      },
      /**
       * MicroCMSに登録されているブログ記事一覧の取得
       * @returns 成功時のレスポンス
       */
      get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * MicroCMSに登録されているブログ記事一覧の取得
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
    },
    musics: {
      detail: {
        _id: (val2: string) => {
          const prefix2 = `${PATH3}/${val2}`

          return {
            /**
             * MicroCMSに登録されている曲の取得
             * @returns 成功時のレスポンス
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], Methods3['get']['resHeaders'], Methods3['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * MicroCMSに登録されている曲の取得
             * @returns 成功時のレスポンス
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], Methods3['get']['resHeaders'], Methods3['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * APIGateway上のCORS用設定
             */
            options: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, Methods3['options']['resHeaders'], Methods3['options']['status']>(prefix, prefix2, OPTIONS, option).send(),
            /**
             * APIGateway上のCORS用設定
             */
            $options: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, Methods3['options']['resHeaders'], Methods3['options']['status']>(prefix, prefix2, OPTIONS, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      },
      song_categories: {
        /**
         * 曲カテゴリ一覧の取得を行う。
         * @returns 成功時のレスポンス
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * 曲カテゴリ一覧の取得を行う。
         * @returns 成功時のレスポンス
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        /**
         * 曲カテゴリの追加を行う。
         * @returns 成功時のレスポンス
         */
        post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * 曲カテゴリの追加を行う。
         * @returns 成功時のレスポンス
         */
        $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        /**
         * 曲カテゴリの削除を行う。
         * @returns 成功時のレスポンス
         */
        delete: (option: { query: Methods4['delete']['query'], config?: T | undefined }) =>
          fetch<Methods4['delete']['resBody'], Methods4['delete']['resHeaders'], Methods4['delete']['status']>(prefix, PATH4, DELETE, option).json(),
        /**
         * 曲カテゴリの削除を行う。
         * @returns 成功時のレスポンス
         */
        $delete: (option: { query: Methods4['delete']['query'], config?: T | undefined }) =>
          fetch<Methods4['delete']['resBody'], Methods4['delete']['resHeaders'], Methods4['delete']['status']>(prefix, PATH4, DELETE, option).json().then(r => r.body),
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
        $path: (option?: { method: 'delete'; query: Methods4['delete']['query'] } | undefined) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      utils: {
        cms_webhook: {
          /**
           * MiscroCMSからのwebhookリクエストを受けて、
           * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
           * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
           * @returns 成功時のレスポンス
           */
          post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['post']['resBody'], Methods5['post']['resHeaders'], Methods5['post']['status']>(prefix, PATH5, POST, option).json(),
          /**
           * MiscroCMSからのwebhookリクエストを受けて、
           * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
           * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
           * @returns 成功時のレスポンス
           */
          $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['post']['resBody'], Methods5['post']['resHeaders'], Methods5['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
          /**
           * APIGateway上のCORS用設定
           */
          options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods5['options']['resHeaders'], Methods5['options']['status']>(prefix, PATH5, OPTIONS, option).send(),
          /**
           * APIGateway上のCORS用設定
           */
          $options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods5['options']['resHeaders'], Methods5['options']['status']>(prefix, PATH5, OPTIONS, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH5}`
        },
        iframe_converter: {
          /**
           * SoundCloudから取得したiframeから情報を抜き出し返す
           * @returns 成功時のレスポンス
           */
          post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods6['post']['resBody'], Methods6['post']['resHeaders'], Methods6['post']['status']>(prefix, PATH6, POST, option).json(),
          /**
           * SoundCloudから取得したiframeから情報を抜き出し返す
           * @returns 成功時のレスポンス
           */
          $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods6['post']['resBody'], Methods6['post']['resHeaders'], Methods6['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
          /**
           * APIGateway上のCORS用設定
           */
          options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods6['options']['resHeaders'], Methods6['options']['status']>(prefix, PATH6, OPTIONS, option).send(),
          /**
           * APIGateway上のCORS用設定
           */
          $options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods6['options']['resHeaders'], Methods6['options']['status']>(prefix, PATH6, OPTIONS, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH6}`
        }
      },
      /**
       * MicroCMSに登録されている曲一覧の取得
       * @returns 成功時のレスポンス
       */
      get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], Methods2['get']['resHeaders'], Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * MicroCMSに登録されている曲一覧の取得
       * @returns 成功時のレスポンス
       */
      $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], Methods2['get']['resHeaders'], Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
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
      $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
