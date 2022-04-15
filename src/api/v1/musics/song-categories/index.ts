/* eslint-disable */
export type Methods = {
  /** 曲カテゴリ一覧の取得を行う。 */
  get: {
    status: 200
    /** 成功時のレスポンス */
    resBody: {
      name: string
    }[]

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
    }
  }

  /** 曲カテゴリの追加を行う。 */
  post: {
    status: 200
    /** 成功時のレスポンス */
    resBody: {
      name: string
    }[]

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
    }

    reqBody: {
      name: string
    }[]
  }

  /** 曲カテゴリの削除を行う。 */
  delete: {
    query: {
      /** 削除するカテゴリの名前を指定する。カンマ区切りで複数指定可能 */
      name: string
    }

    status: 200
    /** 成功時のレスポンス */
    resBody: {
      name: string
    }[]

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
    }
  }

  /** APIGateway上のCORS用設定 */
  options: {
    status: 200

    resHeaders: {
      'Access-Control-Allow-Origin': string
      'Access-Control-Allow-Methods': string
      'Access-Control-Allow-Headers': string
    }
  }
}
