import { PageNames } from '@/const/pages'
import Link from 'next/link'
import React from 'react'
import styles from './Section.module.css'

type Props = {
    children: React.ReactNode
    className?: string
    bgColor?: 'yellow' | 'blue' | 'red'
    title: string
    pageLink?: PageNames
}

export const Section: React.VFC<Props> = ({
    children,
    title,
    className,
    bgColor,
    pageLink,
}) => {
    console.log(bgColor)
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
        >
            <div className={styles.container}>
                <div className={styles.head}>
                    <h2>
                        <span className={styles.title}>{title}</span>
                    </h2>
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
