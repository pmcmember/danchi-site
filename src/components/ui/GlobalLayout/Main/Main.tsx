import React from 'react';

import styles from './Main.module.css'
import BgImage from '@/assets/Brick01-p.jpg'

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
            <div className={`${styles.house__body}`} style={{backgroundImage: `url(${BgImage.src})`, backgroundSize: "7%"}}>
                <main className={styles.house__body__content} style={{background: "transparent"}}>
                    {children}
                </main>
            </div>
        </div>
    )
}