import { FieldError } from 'react-hook-form'
import { ContactFormAttributes } from '@/const/forms'

export const outputFormErrorText = (
    type: FieldError['type'],
    validationConf: ContactFormAttributes['validationConf']
): string => {
    return type === 'required'
        ? '内容を入力してください'
        : type === 'min' || type === 'minLength'
        ? `${validationConf['minLength']}文字以上入力してください`
        : type === 'max' || type === 'maxLength'
        ? `内容は${validationConf['maxLength']}文字以内に収めてください`
        : type === undefined
        ? ''
        : 'エラーが発生しています。内容をもう一度ご確認ください。'
}
