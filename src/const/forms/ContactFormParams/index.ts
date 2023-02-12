import { ContactFormAttributes, ContactNames } from '../forms.type'
import { FaEnvelope, FaUserCircle } from 'react-icons/fa'
import { BsFillFileTextFill } from 'react-icons/bs'
import { MdSubject } from 'react-icons/all'

const contactFormParams: Map<ContactNames, ContactFormAttributes> = new Map([
    [
        'username',
        {
            title: 'お名前',
            type: 'text',
            inputType: 'input',
            placeholder: 'お名前を入力してください',
            Icon: FaUserCircle,
            validationConf: {
                required: true,
                minLength: 1,
                maxLength: 255,
            },
        },
    ],
    [
        'emailAddress',
        {
            title: 'メールアドレス',
            type: 'email',
            inputType: 'input',
            placeholder: '返信が必要な場合は入力してください',
            Icon: FaEnvelope,
            validationConf: {
                required: false,
                minLength: 0,
                maxLength: 255,
            },
        },
    ],
    [
        'subject',
        {
            title: '件名',
            type: 'text',
            inputType: 'input',
            placeholder: '件名を入力してください',
            Icon: MdSubject,
            validationConf: {
                required: true,
                minLength: 0,
                maxLength: 255,
            },
        },
    ],
    [
        'content',
        {
            title: 'お問い合わせ内容',
            type: 'text',
            inputType: 'textarea',
            placeholder: 'お問い合わせ内容を入力してください',
            Icon: BsFillFileTextFill,
            validationConf: {
                required: true,
                minLength: 1,
                maxLength: 10000,
            },
        },
    ],
])

export default contactFormParams
