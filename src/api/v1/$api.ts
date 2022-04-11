import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './blogs'
import type { Methods as Methods1 } from './blogs/_id'
import type { Methods as Methods2 } from './musics'
import type { Methods as Methods3 } from './musics/_id'
import type { Methods as Methods4 } from './musics/iframe-converter'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/blogs'
  const PATH1 = '/v1/musics'
  const PATH2 = '/v1/musics/iframe-converter'
  const GET = 'GET'
  const POST = 'POST'
  const OPTIONS = 'OPTIONS'

  return {
    blogs: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * MicroCMSに登録されているブログ記事の取得
           * @returns 成功時のレスポンス
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], Methods1['get']['resHeaders'], Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * MicroCMSに登録されているブログ記事の取得
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
      },
      /**
       * MicroCMSに登録されているブログ記事一覧の取得
       * @returns 成功時のレスポンス
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * MicroCMSに登録されているブログ記事一覧の取得
       * @returns 成功時のレスポンス
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
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
      $path: () => `${prefix}${PATH0}`
    },
    musics: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * MicroCMSに登録されている曲の取得
           * @returns 成功時のレスポンス
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], Methods3['get']['resHeaders'], Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * MicroCMSに登録されている曲の取得
           * @returns 成功時のレスポンス
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], Methods3['get']['resHeaders'], Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * APIGateway上のCORS用設定
           */
          options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods3['options']['resHeaders'], Methods3['options']['status']>(prefix, prefix1, OPTIONS, option).send(),
          /**
           * APIGateway上のCORS用設定
           */
          $options: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, Methods3['options']['resHeaders'], Methods3['options']['status']>(prefix, prefix1, OPTIONS, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      iframe_converter: {
        /**
         * SoundCloudから入手した生Iframe(共有タブに記載されているものそのまま)から情報を抜き取り、musics情報を更新する
         * @returns 成功時のレスポンス
         */
        post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, PATH2, POST, option).json(),
        /**
         * SoundCloudから入手した生Iframe(共有タブに記載されているものそのまま)から情報を抜き取り、musics情報を更新する
         * @returns 成功時のレスポンス
         */
        $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['post']['resBody'], Methods4['post']['resHeaders'], Methods4['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
        /**
         * APIGateway上のCORS用設定
         */
        options: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods4['options']['resHeaders'], Methods4['options']['status']>(prefix, PATH2, OPTIONS, option).send(),
        /**
         * APIGateway上のCORS用設定
         */
        $options: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, Methods4['options']['resHeaders'], Methods4['options']['status']>(prefix, PATH2, OPTIONS, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      },
      /**
       * MicroCMSに登録されている曲一覧の取得
       * @returns 成功時のレスポンス
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], Methods2['get']['resHeaders'], Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * MicroCMSに登録されている曲一覧の取得
       * @returns 成功時のレスポンス
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], Methods2['get']['resHeaders'], Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * APIGateway上のCORS用設定
       */
      options: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, Methods2['options']['resHeaders'], Methods2['options']['status']>(prefix, PATH1, OPTIONS, option).send(),
      /**
       * APIGateway上のCORS用設定
       */
      $options: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, Methods2['options']['resHeaders'], Methods2['options']['status']>(prefix, PATH1, OPTIONS, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
