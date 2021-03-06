import React from 'react';

import { PageColors, PageTitles, PageNames, PageIcons } from '@/const/pages';
import { LinkButton } from '@/components/ui/Buttons/LinkButton';

type Props = {
    page: PageNames;
    children: React.ReactNode;
    hideLink?: boolean;
    hideHeader?: boolean;
    contentsTwoColumn?: boolean
}

export const Overview: React.VFC<Props> = ({
    page,
    children,
    hideLink,
    hideHeader,
    contentsTwoColumn
}) => {
    const PageIcon = PageIcons.get(page)!

    return (
        <div
            className="rounded-3xl overflow-hidden w-full"
            id={page}
        >
            { ! hideHeader && (
                <div
                    className="bg-white h-16 flex items-center justify-center"
                    style={{background: PageColors.get(page)}}
                >
                    <h2 className={`flex justify-center items-center`}>
                        <span className="mr-1"><PageIcon/></span>{PageTitles.get(page)}
                    </h2>
                </div>
            )}
            <div className="w-full py-10 px-0 bg-white">
                <div className={`${contentsTwoColumn? "sm:w-11/12": "sm:w-4/5"} w-11/12 m-auto`}>
                    <div>
                        {children}
                    </div>

                    { ! hideLink && (
                        <div className="my-12 mx-auto text-center">
                            <LinkButton href={`/${page}`}>{PageTitles.get(page)}一覧へ</LinkButton>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}