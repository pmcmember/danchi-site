import React from 'react'

import styles from './RealDentButton.module.css'

type Props = {
    children: React.ReactNode
    size: string
    onClick?: React.DOMAttributes<HTMLButtonElement>['onClick']
    disabled?: boolean
}

export const RealDentButton: React.VFC<Props> = ({
    children,
    size,
    onClick,
    disabled,
}) => {
    const [isClicked, setIsClicked] = React.useState(false)

    return (
        <button
            className={`${styles.realDentButton}`}
            style={{ height: size, width: size }}
            onMouseDown={() => {
                setIsClicked(true)
            }}
            onMouseUp={() => {
                setIsClicked(false)
            }}
            onClick={onClick}
            disabled={disabled}
        >
            <div
                className={`${styles.realDentButton__content} ${
                    isClicked ? styles.realDentButton__contentClicked : ''
                }`}
            >
                {children}
            </div>
        </button>
    )
}
