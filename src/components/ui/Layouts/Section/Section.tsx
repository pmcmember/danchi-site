import { PageNames } from '@/const/pages'
import Link from 'next/link'
import React from 'react'
import styles from './Section.module.css'

export type BaseSectionType = {
    className?: string
    bgColor?: 'yellow' | 'blue' | 'red'
    pageLink?: PageNames
}

type Props = {
    children: React.ReactNode
    title?: string
} & BaseSectionType

export const Section: React.VFC<Props> = ({
    children,
    title,
    className,
    bgColor,
    pageLink,
}) => {
    const backgroundColor =
        bgColor === 'yellow'
            ? 'bg-yellow-200'
            : bgColor === 'blue'
            ? 'bg-blue-200'
            : bgColor === 'red'
            ? 'bg-red-200'
            : 'bg-white'
    return (
        <section
            className={`${styles.section} ${
                className || ''
            } ${backgroundColor}`}
            style={title ? { padding: 'calc(40px + 10vw) 6vw' } : {}}
        >
            <div className={styles.container}>
                <div className={styles.head}>
                    {title && (
                        <h2>
                            <span className={styles.title}>{title}</span>
                        </h2>
                    )}
                    {pageLink && (
                        <a className={styles.pageLink}>
                            <Link href={`/${pageLink}`}>show more...</Link>
                        </a>
                    )}
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </section>
    )
}
