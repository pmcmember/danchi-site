import { MicroCMSQueries } from "microcms-js-sdk"
import { AuthRequestHeaders } from "@/api/@types";
import { BlogsAPIResponse } from '../@types'

export type Methods = {
    /**
     * 指定のIDに紐づいたブログ記事の取得
     */
     get: {
        query?: MicroCMSQueries;
        reqHeaders: AuthRequestHeaders;
        
        resBody: BlogsAPIResponse;
    }
}