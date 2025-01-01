"use client"

import useImageUpload from "@/src/hooks/useImageUpload";
import { FormEventHandler, useEffect, useRef, useState } from "react"
import CardHeader from "../area/CardHeader";
import DefaultSubmitButton from "../block/DefaultSubmitButton";
import useRest from "@/src/hooks/useRest";
import { ApiRequest, CommonIdMessage, ValidationMessage } from "@/src/types/types";
import { useRouter } from "next/navigation";

export default function PostFormView() {
	// request
	const titleRef = useRef<HTMLInputElement>(null);
	const contentRef = useRef<HTMLTextAreaElement>(null);

	// request (image)
	const { file, imageUrl, uploading, handleFileChange, handleImageUpload } = useImageUpload("posts");

	// response
	const { data, loading, sendRequest } = useRest<CommonIdMessage | ValidationMessage>();

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		const apiRequest: ApiRequest = {
			endpoint: "/api/v1/posts",
			method: "POST",
			body: {
				title: titleRef.current?.value,
				content: contentRef.current?.value,
				imageUrl: imageUrl
			}
		}
		e.preventDefault();
		const { data } = await sendRequest(apiRequest);
		if (data?.status == 201) {
			alert((data as CommonIdMessage).message);
			router.push('/community');
		} else if (data) {
			if ((data as ValidationMessage).cases != undefined) {
				alert(`${JSON.stringify((data as ValidationMessage).cases)}`);
			} else {
				alert((data as CommonIdMessage).message);
			}
		}
	}

	// 파일 선택 이후 자동으로 이미지 업로드
	useEffect(() => {
		if (file) handleImageUpload();
	}, [file])

	return (
		<div className="flex flex-col px-8">
			<CardHeader headline="게시글 작성" />
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 text-xl rounded-lg bg-slate-300">
				<div className="flex flex-row gap-4">
					<input
						className="w-1/2 bg-slate-100"
						name="title"
						ref={titleRef}
						placeholder="제목 입력 (100 글자 이내)"
						required
					/>
				</div>

				<div className="relative w-full min-h-16 flex flex-col items-center bg-slate-400 rounded-lg">
					{imageUrl && (<img src={imageUrl} alt="Uploaded" width={200} height={200} />)}
					<label className="absolute bottom-1 text-sm p-2 m-3 bg-white rounded-xl transition-all opacity-30 hover:opacity-90 cursor-pointer" htmlFor="file-input">클릭하여 이미지 업로드</label>
					<input id="file-input" style={{display:"none"}} className="fixed" type="file" onChange={handleFileChange} />
				</div>

				<div>
					<textarea
						className="w-full min-h-40 bg-slate-100"
						name="content"
						ref={contentRef}
						placeholder="본문 작성"
					/>
				</div>

				<div className="flex flex-row justify-end">
					<DefaultSubmitButton label="등록" />
				</div>
			</form>
		</div>
	);
}
