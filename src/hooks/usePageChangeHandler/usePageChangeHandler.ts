import React from 'react'
import { useRouter } from 'next/router'

type Props<T> = () => T
type Returns<T> = T | undefined

/**
 * ページ遷移ごとに発火させたい関数を指定し、値を受け取る
 * @param handler 発火させたい関数
 * @returns 指定された関数の実行結果
 */
export const usePageChangeHandler = <T>(handler: Props<T>): Returns<T> => {
    const [handlerResult, setHandlerResult] = React.useState<T>()
    const router = useRouter()

    React.useEffect(() => {
        router.events.on('routeChangeComplete', changeRouteHandler)
    }, [])

    const changeRouteHandler = () => {
        const result = handler()
        setHandlerResult(result)
    }

    return handlerResult
}
