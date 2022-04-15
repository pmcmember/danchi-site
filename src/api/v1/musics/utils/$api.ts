import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './cms-webhook'
import type { Methods as Methods1 } from './iframe-converter'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/musics/utils/cms-webhook'
  const PATH1 = '/v1/musics/utils/iframe-converter'
  const POST = 'POST'
  const OPTIONS = 'OPTIONS'

  return {
    cms_webhook: {
      /**
       * MiscroCMSからのwebhookリクエストを受けて、
       * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
       * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
       * @returns 成功時のレスポンス
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * MiscroCMSからのwebhookリクエストを受けて、
       * １．SoundCloudから取得したiframeから情報を受け取り、受け取った情報をもとにMicroCMSへデータ更新リクエストを飛ばす。
       * ２．Webhookリクエスト内容に含まれている曲カテゴリ情報を取得し、カテゴリ一覧を更新する。
       * @returns 成功時のレスポンス
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
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
    iframe_converter: {
      /**
       * SoundCloudから取得したiframeから情報を抜き出し返す
       * @returns 成功時のレスポンス
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], Methods1['post']['resHeaders'], Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * SoundCloudから取得したiframeから情報を抜き出し返す
       * @returns 成功時のレスポンス
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], Methods1['post']['resHeaders'], Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      /**
       * APIGateway上のCORS用設定
       */
      options: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, Methods1['options']['resHeaders'], Methods1['options']['status']>(prefix, PATH1, OPTIONS, option).send(),
      /**
       * APIGateway上のCORS用設定
       */
      $options: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, Methods1['options']['resHeaders'], Methods1['options']['status']>(prefix, PATH1, OPTIONS, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
