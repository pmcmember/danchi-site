import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export const ColumnsListChild: React.VFC<Props> = ({
    children,
    className,
    style,
}) => {
    return (
        <li className={`mb-10 sm:mb-0 ${className || ''}`} style={style}>
            {children}
        </li>
    )
}
