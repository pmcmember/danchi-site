import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Section: React.VFC<Props> = ({children}) => {
    return (
        <section
            className="w-full mx-auto mt-0 mb-16 md:mb-24 flex justify-center items-center"
        >
            {children}
        </section>
    )
}