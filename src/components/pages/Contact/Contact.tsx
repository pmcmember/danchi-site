import React from 'react'
import type { NextPage } from 'next'
import { ContactFormParams, ContactInputs } from '@/const/forms'
import { PageNames } from '@/const/pages'
import {
    BaseSectionType,
    PageContentsWrapper,
    Section,
} from '@/components/ui/Layouts'
import { outputFormErrorText } from '@/utilities/outputFormErrorText'
import {
    Control,
    Controller,
    FieldErrors,
    SubmitHandler,
    useForm,
} from 'react-hook-form'
import { FormInput } from '@/components/ui/Forms/FormInput'
import { FaPaperPlane } from 'react-icons/fa'
import { Button } from '@mui/material'
import { ContactRequest } from '@/api/@types'
import { client } from '@/lib/aspida'

export const Contact: NextPage = () => {
    const pageName: PageNames = 'contact'

    return (
        <PageContentsWrapper page={pageName} className="bg-white">
            <ContactSection />
        </PageContentsWrapper>
    )
}

export const ContactSection: React.FC<BaseSectionType> = ({
    className,
    bgColor,
}) => {
    return (
        <Section title="お問い合わせ" className={className} bgColor={bgColor}>
            <ContactOverview />
        </Section>
    )
}

export const ContactOverview: React.VFC = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<ContactInputs>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<ContactInputs> = React.useCallback(
        async (data) => {
            const body: ContactRequest = {
                name: data.username,
                content: data.content,
                toAddress: data.emailAddress,
                subject: data.subject,
            }

            await client.v1.contact.$post({
                body,
            })
            // TODO: ページ遷移処理を実装
        },
        []
    )

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput name={'username'} control={control} errors={errors} />
            <CustomInput
                name={'emailAddress'}
                control={control}
                errors={errors}
            />
            <CustomInput name={'subject'} control={control} errors={errors} />
            <CustomInput
                name={'content'}
                control={control}
                errors={errors}
                multiline
            />

            <div className="w-full text-center mt-5">
                <Button
                    type="submit"
                    startIcon={<FaPaperPlane />}
                    color="primary"
                    variant="contained"
                    // tailwind cssのbaseによって背景が透明になるため、明示的に背景色を指定
                    className="bg-blue-500"
                >
                    送信
                </Button>
            </div>
        </form>
    )
}

type CustomInput = {
    name: keyof ContactInputs
    multiline?: boolean
    control: Control<ContactInputs, any>
    errors: FieldErrors<ContactInputs>
}
const CustomInput: React.FC<CustomInput> = ({
    name,
    multiline,
    control,
    errors,
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue={ContactFormParams.get(name)!.defaultValue || ''}
        rules={ContactFormParams.get(name)!.validationConf}
        render={({ field }) => (
            <FormInput
                {...field}
                className="w-full mb-10"
                required={ContactFormParams.get(name)!.validationConf.required}
                errorText={
                    errors?.[name]?.type &&
                    outputFormErrorText(
                        errors?.[name]?.type || '',
                        ContactFormParams.get(name)!.validationConf
                    )
                }
                label={ContactFormParams.get(name)!.title}
                multiline={multiline}
                placeholder={ContactFormParams.get(name)!.placeholder}
                Icon={ContactFormParams.get(name)!.Icon}
            />
        )}
    />
)
