import React from 'react';

import styles from './Main.module.css'

type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

export const Main: React.VFC<Props> = ({children, style, className}) => {
    return (
        <div
            style={style}
            className={`${styles.house} ${className || ""}`}
        >
            <div className={styles.house__roof}>
                <div className={styles.house__roof__leftT}/>
                <div className={styles.house__roof__rightT}/>
            </div>
            <div className={styles.house__body}>
                <main className={styles.house__body__content}>
                    {children}
                </main>
            </div>
        </div>
    )
}