import React from 'react';
import Link from 'next/link';

type Props = {
    href: string;
    children: React.ReactNode
}

export const LinkButton: React.VFC<Props> = ({href, children}) => {
    return (
        <Link href={href}>
            <a>
                <div className="text-center bg-white hover:bg-gray-100 duration-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    {children}
                </div>
            </a>
        </Link>
    )
}