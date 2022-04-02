import React from 'react'

type Props = {
  children: React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ColumnsListParent: React.VFC<Props> = ({children, className, style}) => {
  return (
    <ul className={`sm:grid sm:grid-cols-2 sm:gap-10 ${className || ""}`} style={style}>
      {children}
    </ul>
  )
}