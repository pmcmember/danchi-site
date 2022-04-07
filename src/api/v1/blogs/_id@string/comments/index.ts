import { MethodsDefineUtil, AuthRequestHeaders } from '@/api/@types'
import { CommentsSchema } from './@types';

export type Methods = MethodsDefineUtil<{
    /**
     * ブログ記事に紐づいた全てのコメント情報取得
     */
    get: {
        reqHeaders: AuthRequestHeaders;

        resBody: CommentsSchema;
    }

    /**
     * ブログ記事に紐づいた新規コメントの作成
     */
    post: {
        reqHeaders: AuthRequestHeaders;
        reqBody: CommentsSchema;

        resBody: CommentsSchema;
    }
}>
