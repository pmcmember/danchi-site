import React from 'react'
import styles from './Article.module.css'

type Props = {
    children: React.ReactNode
    className?: string
    bgColor?: 'yellow' | 'blue' | 'red'
}

export const Article: React.VFC<Props> = ({ children, className, bgColor }) => {
    const backgroundColor =
        bgColor === 'yellow'
            ? 'bg-yellow-200'
            : bgColor === 'blue'
            ? 'bg-blue-200'
            : bgColor === 'red'
            ? 'bg-red-200'
            : 'bg-white'
    return (
        <article
            className={`${styles.article} ${
                className || ''
            } ${backgroundColor}`}
        >
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
            </div>
        </article>
    )
}
