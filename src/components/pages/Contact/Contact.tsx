import React from 'react';
import type { NextPage } from 'next'
import {
    ContactFormParams,
    ContactInputs,
} from '@/const/forms';
import { PageNames } from '@/const/pages';
import {
    Overview,
    Section,
    PageContentsWrapper
} from '@/components/ui/Layouts';
import { outputFormErrorText } from '@/utilities/outputFormErrorText'
import { useForm, SubmitHandler, FieldError, Controller } from 'react-hook-form';
import { FormInput } from '@/components/ui/Forms/FormInput';
import { FaPaperPlane } from 'react-icons/fa'
import { Button } from '@mui/material'



export const Contact: NextPage = () => {
    const pageName: PageNames = "contact"

    return (
        <PageContentsWrapper
            page={pageName}
            className="bg-white"
        >
            <Section>
                <Overview page={pageName} hideHeader hideLink>
                    <ContactOverview/>
                </Overview>
            </Section>
        </PageContentsWrapper>
    )
}

export const ContactOverview: React.VFC = () => {
    const {
        handleSubmit,
        watch,
        formState: { errors },
        control
    } = useForm<ContactInputs>();

    const onSubmit: SubmitHandler<ContactInputs> = React.useCallback((data) => {
        console.log(process.env.NEXT_PUBLIC_TEST);

        // TODO: contactのエンドポイントまでリクエスト
    }, [])

    return (
        <>
            <div className="mb-24 text-center">
                <h1 className="font-bold text-2xl text-slate-700 mb-4">お問い合わせフォーム</h1>
                <div>必須項目を入力後、送信ボタンを押してください</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    control={control}
                    defaultValue={ContactFormParams.get("username")!.defaultValue || ""}
                    rules={ContactFormParams.get("username")!.validationConf}
                    render={(({field}) => (
                        <FormInput
                            {...field}
                            className="w-full mb-10"
                            required={ContactFormParams.get("username")!.validationConf.required}
                            errorText={errors["username"]?.type &&
                                outputFormErrorText(errors["username"].type, ContactFormParams.get("username")!.validationConf)
                            }
                            label={ContactFormParams.get("username")!.title}
                            placeholder={ContactFormParams.get("username")!.placeholder}
                            Icon={ContactFormParams.get("username")!.Icon}
                        />
                    ))}
                />

                <Controller
                    name="emailAddress"
                    control={control}
                    defaultValue={ContactFormParams.get("emailAddress")!.defaultValue || ""}
                    rules={ContactFormParams.get("emailAddress")!.validationConf}
                    render={(({field}) => (
                        <FormInput
                            {...field}
                            className="w-full mb-10"
                            required={ContactFormParams.get("emailAddress")!.validationConf.required}
                            errorText={errors["emailAddress"]?.type &&
                                outputFormErrorText(errors["emailAddress"].type, ContactFormParams.get("emailAddress")!.validationConf)
                            }
                            label={ContactFormParams.get("emailAddress")!.title}
                            placeholder={ContactFormParams.get("emailAddress")!.placeholder}
                            Icon={ContactFormParams.get("emailAddress")!.Icon}
                        />
                    ))}
                />

                <Controller
                    name="content"
                    control={control}
                    defaultValue={ContactFormParams.get("content")!.defaultValue || ""}
                    rules={ContactFormParams.get("content")!.validationConf}
                    render={(({field}) => (
                        <FormInput
                            {...field}
                            className="w-full mb-10"
                            required={ContactFormParams.get("content")!.validationConf.required}
                            errorText={errors["content"]?.type &&
                                outputFormErrorText(errors["content"].type, ContactFormParams.get("content")!.validationConf)
                            }
                            label={ContactFormParams.get("content")!.title}
                            multiline
                            placeholder={ContactFormParams.get("content")!.placeholder}
                            Icon={ContactFormParams.get("content")!.Icon}
                        />
                    ))}
                />
                <div className="w-full text-center mt-5">
                    <Button
                        type="submit"
                        startIcon={<FaPaperPlane/>}
                        color="primary"
                        variant="contained"
                        // tailwind cssのbaseによって背景が透明になるため、明示的に背景色を指定
                        className="bg-blue-500"
                    >送信</Button>
                </div>
            </form>
        </>
    )
}