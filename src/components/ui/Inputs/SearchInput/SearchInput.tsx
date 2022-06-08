import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
    IconButton,
    Paper,
    InputBase,
} from '@mui/material'


type Props = {
    onSearchButtonClick?: () => void;
    onFormChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value?: string;
}

export const SearchInput: React.VFC<Props> = ({
    onSearchButtonClick,
    onFormChange,
    placeholder,
    value
}) => {
    return (
        <Paper
            className="flex w-full items-center bg-blue-500"
        >
            <InputBase
                value={value}
                placeholder={placeholder}
                onChange={onFormChange}
                className="flex-1 px-3 py-2 bg-white"
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        e.preventDefault();
                        onSearchButtonClick && onSearchButtonClick();
                    }
                }}
            />
            <IconButton onClick={onSearchButtonClick}>
                <AiOutlineSearch className="text-white"/>
            </IconButton>
        </Paper>
    )
}