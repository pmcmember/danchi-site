import React from 'react';
import { PageNames, PageColors, PageTitles, PageIcons } from '@/const/pages';

type Props = {
    page: PageNames;
}

export const PageLabel: React.VFC<Props> = ({page}) => {
    const PageIcon = PageIcons.get(page)!
    return (
        <div
            className="w-full h-24 flex justify-center items-center"
            style={{background: PageColors.get(page)}}
        >
            <h2 className="flex justify-center items-center">
                <span className="mr-1"><PageIcon/></span>
                {PageTitles.get(page)}
            </h2>
        </div>
    )
}