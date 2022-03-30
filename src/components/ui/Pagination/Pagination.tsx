import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import {
    FaAngleLeft,
    FaAngleRight
} from 'react-icons/fa';

type Props = {
    currentNumber: number;
    numberOfPages: number;
    basePath: string;
}

export const Pagination: React.VFC<Props> = ({currentNumber,numberOfPages,basePath}) => {
    const displayScope = 2;
    const startNumber =
        // 最小値
        currentNumber === 1? 1
        // 最大値
        : currentNumber === numberOfPages? (currentNumber - displayScope)
        // それ以外
        : (currentNumber - 1);
    const endNumber = numberOfPages;

    return (
        <nav aria-label="Pagination">
            <ul className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <li>
                    <MoveToDirectionButton
                        {...{
                            numberOfPages,
                            basePath,
                            moveNumber: (currentNumber - 1),
                            direction: "prev",
                            currentNumber
                        }}
                    ><FaAngleLeft/></MoveToDirectionButton>
                </li>

                {((currentNumber - displayScope) ) >= 1 && (
                    <li>
                        <MoveToNumberButton
                            {...{
                                numberOfPages,
                                basePath,
                                moveNumber: 1,
                                currentNumber
                            }}
                        >{1}</MoveToNumberButton>
                    </li>
                )}
                {((currentNumber - displayScope) ) > 1 && (
                    <li>
                        <MoveToNumberButton
                            {...{
                                numberOfPages,
                                basePath,
                                moveNumber: 0,
                                currentNumber,
                                isOmit: true
                            }}
                        >...</MoveToNumberButton>
                    </li>
                )}


                {/* ページ番号前半用 */}
                {Array.from({length: (displayScope + 1)}).map((_, i) => {
                    return (
                        <li>
                            <MoveToNumberButton
                                {...{
                                    numberOfPages,
                                    basePath,
                                    moveNumber: (startNumber + i),
                                    currentNumber
                                }}
                            >{(startNumber + i)}</MoveToNumberButton>
                        </li>
                    )
                })}
                {(currentNumber + displayScope) < (numberOfPages) && (
                    <li>
                        <MoveToNumberButton
                            {...{
                                numberOfPages,
                                basePath,
                                moveNumber: 0,
                                currentNumber,
                                isOmit: true
                            }}
                        >...</MoveToNumberButton>
                    </li>
                )}
                {(currentNumber + displayScope) <= (numberOfPages) && (
                    <li>
                            <MoveToNumberButton
                                {...{
                                    numberOfPages,
                                    basePath,
                                    moveNumber: numberOfPages,
                                    currentNumber
                                }}
                                >{numberOfPages}</MoveToNumberButton>
                        </li>
                )}
                <li>
                    <MoveToDirectionButton
                        {...{
                            numberOfPages,
                            basePath,
                            moveNumber: (currentNumber + 1),
                            direction: "next",
                            currentNumber
                        }}
                    ><FaAngleRight/></MoveToDirectionButton>
                </li>
            </ul>
        </nav>
    )
}


type MoveButtonProps = {
    moveNumber: number;
    children: React.ReactNode;
    direction?: "prev" | "next";
    isOmit?: boolean;
} & Props

const MoveToDirectionButton: React.VFC<MoveButtonProps> = ({
    moveNumber,
    basePath,
    numberOfPages,
    direction,
    children
}) => {
    const isDisable = moveNumber < 1 || moveNumber > numberOfPages
    const directionCss = 
        direction === "prev"? "rounded-l-md"
        : "rounded-r-md";

    return (
        <button disabled={isDisable} className={isDisable? "opacity-50": ""}>
            <Link href={isDisable? "#": `${basePath}/${moveNumber}`}>
                <a
                    className={`${isDisable && "pointer-events-none"} ${directionCss} relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`
                }>
                    <span className="sr-only">{direction}</span>
                    <span className="h-5 w-5 flex items-center justify-center">{children}</span>
                </a>
            </Link>
        </button>

    )
}


const MoveToNumberButton: React.VFC<MoveButtonProps> = ({
    moveNumber,
    basePath,
    numberOfPages,
    currentNumber,
    children,
    isOmit
}) => {
    const isDisable = moveNumber < 1 || moveNumber > numberOfPages
    const isCurrent = currentNumber === moveNumber;

    return (
        <button disabled={isCurrent}>
            <Link href={isCurrent? "#": `${basePath}/${moveNumber}`}>
                <a
                    className={`
                        ${
                            isCurrent ?"pointer-events-none z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                        }
                        ${
                            isDisable && "pointer-events-none"
                        }
                        ${
                            isOmit ? "px-4 rsm:px-px": "px-4"
                        }
                        relative inline-flex items-center py-2 border text-sm font-medium`
                }>
                    {children}
                </a>
            </Link>
        </button>

    )
}
