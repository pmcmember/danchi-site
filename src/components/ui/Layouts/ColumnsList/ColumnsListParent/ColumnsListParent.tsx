import React from 'react'

type Props = {
  children: React.ReactElement[];
  columns?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ColumnsListParent: React.VFC<Props> = ({children, columns, className, style}) => {
  const colNum = columns || 2

  return (
    <ul className={`sm:grid sm:grid-cols-${colNum} sm:gap-10 ${className || ""}`} style={style}>
      {children}
    </ul>
  )
}