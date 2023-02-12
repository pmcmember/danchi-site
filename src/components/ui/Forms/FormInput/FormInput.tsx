import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    OutlinedInputProps,
} from '@mui/material'

import { IconType } from 'react-icons'

type Props = {
    name: OutlinedInputProps['name']
    multiline?: OutlinedInputProps['multiline']
    label: OutlinedInputProps['label']
    placeholder?: OutlinedInputProps['placeholder']
    onChange: OutlinedInputProps['onChange']
    onBlur: OutlinedInputProps['onBlur']
    value: OutlinedInputProps['value']
    ref: OutlinedInputProps['ref']
    required: OutlinedInputProps['required']
    className?: string
    errorText?: string
    Icon: IconType
}

export const FormInput: React.VFC<Props> = ({
    name,
    multiline,
    label,
    placeholder,
    onChange,
    onBlur,
    value,
    ref,
    required,
    className,
    errorText,
    Icon,
}) => {
    const labelText = `${label}${required ? `(必須)` : ''}`
    return (
        <FormControl className={className}>
            <InputLabel htmlFor={name}>{labelText}</InputLabel>
            <OutlinedInput
                id={name}
                label={labelText}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                error={errorText ? true : undefined}
                startAdornment={
                    <InputAdornment position="start">
                        <Icon />
                    </InputAdornment>
                }
                // required
                multiline={multiline}
                minRows={multiline ? 8 : undefined}
            />
            {errorText && <div className="text-red-500">{errorText}</div>}
        </FormControl>
    )
}
