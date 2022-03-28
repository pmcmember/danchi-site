import React from 'react';

import styles from './Layout.module.css';

import CustomHead from './CustomHead';
import Header from "./Header"
import Footer from "./Footer"
import Main from './Main'

type Props = {
    children: React.ReactNode;
    headInfo?: React.ComponentProps<typeof CustomHead>;
}

export const Layout: React.VFC<Props> = ({children, headInfo}) => {
    return (
        <div className={styles.layout}>
            {/* <CustomHead
                {{...headInfo}}
            /> */}

            <Header
                className={styles.header}
            />

            <Main
                className={styles.main}
            >
                {children}
            </Main>

            <Footer
                className={styles.footer}
            />
        </div>
    )
}