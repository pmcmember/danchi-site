import { IconType } from 'react-icons'
import { PageAssociation, PageNames } from '@/const/pages';
import React from 'react'

export const Menus: React.VFC = () => {
    return (
        <div className="flex justify-center items-center">

    </div>
  )
}

type Props = {
    page: PageNames;
    iconSvg: IconType;
}

const Menu: React.FC<Props> = ({page, iconSvg}) => {
    return (
        <div>
            {iconSvg({})}
        </div>
    )
}