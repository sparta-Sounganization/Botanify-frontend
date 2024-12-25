"use client";

import { useState } from "react";
import { DefaultView } from "@/src/components/view/DefaultView";
import PostFormView from "@/src/components/view/PostFormView";
import useRest from "@/src/hooks/useRest";
import { ApiRequest } from "@/src/types/types";

export default function PostWrite() {
    const [form, setForm] = useState({
        title: "",
        content: "",
        imageUrl: "",
        message: "",
    });

    const { data, loading, error, sendRequest } = useRest<ApiRequest>({
        endpoint: "api/v1/posts",
        method: "POST",
        body: form,
    });

    // 필드 값을 업데이트하는 함수
    const setFieldValue = (field: string, value: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [field]: value,
        }));
    };

    // 폼 제출 함수
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const postData = {
            title: form.title,
            content: form.content,
            imageUrl: form.imageUrl,
        };

        // 요청 보내기
        const request: ApiRequest = {
            endpoint: "api/v1/posts",
            method: "POST",
            body: postData,
        };

        const { data, error } = await sendRequest(request);

        if (error) {
            setForm((prevForm) => ({
                ...prevForm,
                message: `Error: ${error}`,
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                message: "Post successfully created!",
            }));
        }
    };

    // 폼 데이터 객체
    const formProps = {
        handleSubmit,
        setFieldValue,
        title: form.title,
        content: form.content,
        imageUrl: form.imageUrl,
        message: form.message,
    };

    return (
        <DefaultView>
            <PostFormView form={formProps} />
        </DefaultView>
    );
}
