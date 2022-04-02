import React from 'react';

import {
    Header,
    Footer,
    Main,
    PageLabel
} from './index';

import { PageNames } from '@/const/pages';


type Props = {
    children: React.ReactNode;
    currentPage: PageNames;
}

export const GlobalLayout: React.VFC<Props> = ({children, currentPage}) => {
    return (
        <div className="relative">
            <Header
                className="fixed h-12"
            />

            <div className="mt-12">
                {currentPage !== "top" && (
                    <PageLabel page={currentPage}/>
                )}
            </div>

            <Main
                className=""
            >
                {children}
            </Main>

            <Footer
                className="bottom-0 left-0"
            />
        </div>
    )
}