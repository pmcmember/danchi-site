import api from '@/api/$api';
import aspida, { FetchConfig } from '@aspida/fetch';


const fetchConfig: FetchConfig = {
    headers: {
        "X-Custom-Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_AUTHORIZATION_KEY || "",
        "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY || ""
    },
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
    mode: "cors"
}

export const client = api(aspida(fetch, fetchConfig))