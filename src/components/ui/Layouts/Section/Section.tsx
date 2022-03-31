import React from 'react'

type Props = {
    /**
     * standard: 800px,
     * large: 1100px,
     * default: 800px
     */
    maxWidth?: "standard" | "large";
    children: React.ReactNode
}

export const Section: React.VFC<Props> = ({children, maxWidth}) => {
    const maxWidthSize = maxWidth === "large"? "1100px": "800px"
    return (
        <section
            className="w-full mx-auto mt-0 mb-16 md:mb-24 flex justify-center items-center"
            style={{maxWidth: maxWidthSize}}
        >
            {children}
        </section>
    )
}