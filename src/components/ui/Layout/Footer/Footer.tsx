import React from 'react';

import styles from './Footer.module.css';

type Props = {
    style?: React.CSSProperties;
    className?: string;
}

export const Footer: React.VFC<Props> = ({style, className}) => {
    return (
        <footer
            style={style}
            className={`${styles.footer} ${className || ""}`}
        >
            <div className={styles.text}>©DANCHI</div>
        </footer>
    )
}