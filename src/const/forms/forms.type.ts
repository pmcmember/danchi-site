import { IconType } from 'react-icons';

export type ContactNames = "username" | "emailAddress" | "content"

export type ContactInputs = {[key in ContactNames]: string}

export type ContactFormAttributes = {
    title: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    defaultValue?: string;
    validationConf: {
        required: boolean;
        minLength: number;
        maxLength: number;
    };
    Icon: IconType;
}
