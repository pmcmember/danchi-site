import api from '@/api/$api'
import aspida, { FetchConfig } from '@aspida/fetch'
import { apiConfig } from '@/const/api'

const fetchConfig: FetchConfig = {
    headers: {
        'X-Custom-Authorization': 'Bearer ' + apiConfig.authorizationKey,
        'X-Api-Key': apiConfig.apiKey,
    },
    baseURL: apiConfig.apiBaseUrl,
    mode: 'cors',
}

export const client = api(aspida(fetch, fetchConfig))
