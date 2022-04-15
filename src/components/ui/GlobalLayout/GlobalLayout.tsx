import React from 'react';

import styles from './GlobalLayout.module.css'
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
    const [isHide, setIsHide] = React.useState<boolean>(false);

    React.useEffect(() => {
        // ページ最上部からbufferまでの間BottomNavを隠さない
        const buffer: number = 64;
        let offset: number = 0;
        let lastPosition: number = 0;

        const onScroll = () => {
            lastPosition = window.scrollY;
            window.requestAnimationFrame(() => {
                hideAppear(lastPosition);
            })
        }

        const hideAppear = (lastPosition: number) => {
            if (lastPosition > buffer) {
                if (lastPosition > offset) {
                    setIsHide(true);
                } else {
                    setIsHide(false);
                }
                offset = lastPosition;
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className="relative">
            <Header
                className="fixed h-12 z-40"
                isHide={isHide}
            />

            <div className="mt-20">
                <PageLabel page={currentPage}/>
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

