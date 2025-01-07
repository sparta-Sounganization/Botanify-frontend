"use client";

import useRest from "@/src/hooks/useRest";
import { ApiRequest, CommonIdMessage, ValidationMessage } from "@/src/types/types";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import DefaultSubmitButton from "./DefaultSubmitButton";

export default function CommentForm() {

    const contentRef = useRef<HTMLTextAreaElement>(null);

    const { data, loading, sendRequest } = useRest<CommonIdMessage | ValidationMessage>();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const apiRequest: ApiRequest = {
            endpoint: `/api/v1/comments/${window.location.pathname}/comments`,
            method: "POST",
            body: {
                content: contentRef.current?.value
            }
        }
        e.preventDefault();
        const { data } = await sendRequest(apiRequest);
        if (data?.status == 201) {
            window.location.reload();
        } else if (data) {
            if ((data as ValidationMessage).cases != undefined) {
                alert(`${JSON.stringify((data as ValidationMessage).cases)}`);
            } else {
                alert((data as CommonIdMessage).message);
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <textarea
                className="w-full bg-slate-100 rounded-xl p-4"
                name="content"
                ref={contentRef}
                placeholder="댓글..."
            />
            <div className="flex flex-row justify-end">
                <DefaultSubmitButton label="등록" />
            </div>
        </form>
    )
}