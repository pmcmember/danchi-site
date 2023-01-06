import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
    const prefix = (
        baseURL === undefined ? 'http://localhost:{port}/{basePath}' : baseURL
    ).replace(/\/$/, '')
    const PATH0 = '/v1/contact'
    const POST = 'POST'

    return {
        /**
         * ウェブサイトのお問い合わせフォームからお問い合わせを受けた際のメール送信、履歴保存処理
         * @param option.body - お問い合わせリクエスト
         * @returns 成功時のレスポンス
         */
        post: (option: {
            body: Methods0['post']['reqBody']
            headers?: Methods0['post']['reqHeaders'] | undefined
            config?: T | undefined
        }) =>
            fetch<
                Methods0['post']['resBody'],
                BasicHeaders,
                Methods0['post']['status']
            >(prefix, PATH0, POST, option).json(),
        /**
         * ウェブサイトのお問い合わせフォームからお問い合わせを受けた際のメール送信、履歴保存処理
         * @param option.body - お問い合わせリクエスト
         * @returns 成功時のレスポンス
         */
        $post: (option: {
            body: Methods0['post']['reqBody']
            headers?: Methods0['post']['reqHeaders'] | undefined
            config?: T | undefined
        }) =>
            fetch<
                Methods0['post']['resBody'],
                BasicHeaders,
                Methods0['post']['status']
            >(prefix, PATH0, POST, option)
                .json()
                .then((r) => r.body),
        $path: () => `${prefix}${PATH0}`,
    }
}

export type ApiInstance = ReturnType<typeof api>
export default api
