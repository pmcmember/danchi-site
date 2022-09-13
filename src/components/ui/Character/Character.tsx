import React from 'react'
import styles from './Character.module.css'
import CharacterImage from '@/assets/character.png'
import { usePageChangeHandler } from '@/hooks'

type Character = {}

const balloonTexts = [
    'おはよー！',
    'チュッ（笑）',
    'うそつき',
    'ケツアナ確定な',
]

const getCharacterPosition = () => {
    return {
        top: String(Math.floor(Math.random() * 80) + 10) + '%',
        left: String(Math.floor(Math.random() * 80) + 10) + '%',
    }
}

export const Character: React.FC<Character> = ({}) => {
    /** state */
    const [characterPosition, setCharacterPosition] = React.useState<{
        top: string | number
        left: string | number
    }>()
    // drag対象のオブジェクトの左上隅の座標からdragしている座標のオフセット
    const [offset, setOffset] = React.useState<{ top: number; left: number }>({
        top: 0,
        left: 0,
    })
    const [isDragging, setIsDragging] = React.useState<boolean>(false)
    const [balloonText, setBalloonText] = React.useState<string>(
        balloonTexts[0]
    )
    const [isTouching, setIsTouching] = React.useState<boolean>(false)
    /** ref */
    const ref = React.createRef<HTMLImageElement>()
    const positionPerPage = usePageChangeHandler(getCharacterPosition)

    /**
     *
     */
    React.useEffect(() => {
        setCharacterPosition(positionPerPage || getCharacterPosition())
    }, [positionPerPage])

    const getBolloonText = () => {
        return balloonTexts[Math.floor(Math.random() * balloonTexts.length)]
    }

    const onDragStartHandler = (pos: { x: number; y: number }) => {
        setIsDragging(true)
        setBalloonText(getBolloonText())
        setOffset({
            top: pos.y - (ref.current?.offsetTop || 0),
            left: pos.x - (ref.current?.offsetLeft || 0),
        })
    }

    const onDragHandler = (pos: { x: number; y: number }) => {
        if (pos.y === 0 && pos.x === 0) return

        setCharacterPosition({
            top: pos.y - offset.top,
            left: pos.x - offset.left,
        })
    }

    const onDragEndHandler = () => setIsDragging(false)

    return (
        <div
            className={styles.character}
            style={{
                ...characterPosition,
                touchAction: isTouching ? 'none' : 'auto',
            }}
            ref={ref}
            // for mouse drag
            onDragStart={(e) =>
                onDragStartHandler({ x: e.clientX, y: e.clientY })
            }
            onDrag={(e) => onDragHandler({ x: e.clientX, y: e.clientY })}
            onDragEnd={onDragEndHandler}
            // for touch
            onTouchStart={(e) => {
                if (e.touches.length !== 1) return
                setIsTouching(true)
                const touches = e.changedTouches[0]
                onDragStartHandler({ x: touches.clientX, y: touches.clientY })
            }}
            onTouchMove={(e) => {
                e.preventDefault()
                if (e.touches.length !== 1) return
                const touches = e.changedTouches[0]
                onDragHandler({ x: touches.clientX, y: touches.clientY })
            }}
            onTouchEnd={() => {
                setIsTouching(false)
                onDragEndHandler
            }}
            onTouchCancel={() => {
                setIsTouching(false)
                onDragEndHandler
            }}
        >
            <div
                className={`${styles.character__balloon}`}
                style={isDragging ? { display: 'block' } : {}}
            >
                {balloonText}
            </div>
            <div className={`${CharacterImage ? 'opacity-0' : ''}`}></div>
            <img
                src={CharacterImage.src}
                className={styles.character__content}
            />
        </div>
    )
}
