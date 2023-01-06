import React from 'react'

import styles from './Input.module.css'

import { IconType } from 'react-icons'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

type Props = {
    type: 'text' | 'email'
    name: string
    labelText: string
    validationConf: {
        minLength: number
        maxLength: number
        format: string
    }
    Icon: IconType
    example?: string
    isRequired?: boolean
    isDisabled?: boolean
    ref?: React.RefObject<HTMLInputElement>
}

export const Input: React.VFC<Props> = ({
    type,
    name,
    labelText,
    Icon,
    isRequired,
    isDisabled,
    ref,
}) => {
    const [inputState] = React.useState<'normal' | 'success' | 'failure'>(
        'normal'
    )
    const [isFocus, setIsFocus] = React.useState<boolean>(false)
    console.log(isFocus)
    return (
        <label className={`w-full relative`}>
            <Description
                className={`${styles.description} ${
                    isFocus
                        ? 'inline-block -top-6 opacity-100'
                        : 'top-1/2 opacity-0 hidden'
                } left-6`}
            >
                {labelText}
            </Description>
            <div className={`${styles.icon}`}>
                <Icon />
            </div>
            <input
                className={`${styles.input}`}
                type={type}
                name={name}
                ref={ref}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholder={labelText}
                required={isRequired}
                disabled={isDisabled}
            />
            <div>
                {inputState === 'success' && <FaCheckCircle />}
                {inputState === 'failure' && <FaExclamationCircle />}
            </div>
        </label>
    )
}

type EtcProps = {
    children: string
    className?: string
}

const Description: React.VFC<EtcProps> = ({ children, className }) => {
    return <div className={`${className || ''} bg-white p-1`}>{children}</div>
}

const ErrorMessage: React.VFC<EtcProps> = ({ children, className }) => {
    return <div className={`${className || ''} `}>{children}</div>
}
