import * as React from 'react'

type Props = {
    className?: string
    onSwipeUnlock: () => void
    children: React.ReactNode
    defaultPositionY?: number
}

const { useState, useLayoutEffect, createRef, useCallback } = React

export const SwipeUnlockUI: React.FC<Props> = ({
    className,
    onSwipeUnlock,
    children,
    defaultPositionY,
}) => {
    // 要素の縦方向位置
    const [posY, setPosY] = useState<number>(0)
    // タッチされた要素の上部からタッチされた箇所への相対距離
    const [relativeY, setRelativeY] = useState<number>(0)
    // ウィンドウ画面の大きさ
    const [innerHeight, setInnerHeight] = useState<number>(0)
    // コンポーネントの動作可否フラグ(拡大したとき対策)
    const [isScreenLock, setIsScreenLock] = useState<boolean>(false)
    const ref = createRef<HTMLDivElement>()

    useLayoutEffect(() => {
        setInnerHeight(window.innerHeight)
        setDefaultPosition()
    }, [])

    const setDefaultPosition = useCallback(() => {
        const defaultPosY =
            defaultPositionY !== undefined
                ? defaultPositionY
                : window.innerHeight / 4

        setPosY(defaultPosY)
    }, [defaultPositionY, setPosY])

    /**
     * コンポーネントに指が触れたしたときの挙動
     */
    const onTouchStart = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            if (e.touches.length !== 1) return
            if (isScreenLock) return

            const touches = e.changedTouches[0]
            setRelativeY(touches.pageY - (ref.current?.offsetTop || 0))
        },
        [isScreenLock, setRelativeY, ref]
    )

    /**
     * タッチして動かしたときの挙動
     */
    const onTouchMove = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            e.preventDefault()
            if (e.touches.length !== 1) return
            if (isScreenLock) return

            const touches = e.changedTouches[0]
            setPosY(touches.pageY - relativeY)
        },
        [isScreenLock, relativeY]
    )

    /**
     * コンポーネントから指を離したときの挙動
     */
    const onTouchEnd = useCallback(() => {
        const ratio = document.body.clientWidth / window.innerWidth

        if (ratio !== 1) {
            // 拡大率が1以上なら画面が動かないようロックする
            if (ratio > 1) {
                if (!isScreenLock) setIsScreenLock(true)
            }
            // 拡大率が1未満ならロックを解除し、デフォルトの位置へ戻す
            if (ratio < 1) {
                if (isScreenLock) setIsScreenLock(false)
                setDefaultPosition()
            }
            return
        } else {
            // 解除判定
            if (posY <= innerHeight / 3 || posY >= innerHeight * (2 / 3)) {
                onSwipeUnlock()
            }

            setDefaultPosition()
        }
    }, [isScreenLock, setIsScreenLock, posY, innerHeight, onSwipeUnlock])

    return (
        <div
            className={className}
            ref={ref}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
                position: 'absolute',
                top: `${posY}px`,
                left: `50%`,
                transform: 'translateX(-50%)',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {children}
        </div>
    )
}
