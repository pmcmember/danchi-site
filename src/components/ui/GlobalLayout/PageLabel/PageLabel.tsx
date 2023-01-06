import React from 'react'
import { PageColors, PageIcons, PageNames, PageTitles } from '@/const/pages'

type Props = {
    page: PageNames
}

export const PageLabel: React.VFC<Props> = ({ page }) => {
    const PageIcon = PageIcons.get(page)!

    return page === 'top' ? (
        <div className="py-20 text-slate-800 text-center">
            <h1 className="font-bold text-3xl tracking-wider mb-5">
                無料BGMサイト
            </h1>
            <div className="">新しいBGMをお探しの方へ、無料でBGM配信中</div>
        </div>
    ) : (
        <div
            className="w-full h-24 flex justify-center items-center"
            style={{ background: PageColors.get(page) }}
        >
            <h2 className="flex justify-center items-center">
                <span className="mr-1">
                    <PageIcon />
                </span>
                {PageTitles.get(page)}
            </h2>
        </div>
    )
}
