import React from 'react';

import styles from './Overview.module.css';

import { pageColors, pageTitles } from '@/const/pages';
import { pageAssociation } from '@/const/pages';

type Props = {
    page: keyof pageAssociation;
    children: React.ReactNode;
}

export const Overview: React.VFC<Props> = ({page, children}) => {
    return (
        <div className={styles.overview}>
            <header
                className={styles.overview__header}
                style={{background: pageColors[page]}}
            >
                <h2 className={styles.overview__header__title}>{pageTitles[page]}</h2>
            </header>
            <main className={styles.overview__content}>
                {children}
            </main>
        </div>
    )
}