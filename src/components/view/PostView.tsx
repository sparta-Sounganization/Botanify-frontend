import { CommentTemp } from "@/src/types/types";
import Loading from "../block/Loading";
import MessageBlock from "../block/MessageBlock";
import useFetchPost from "@/src/hooks/useFetchPost";
import CommentListItems from "../block/CommentListItem";
import CommentForm from "../block/CommentForm";
import Image from "next/image";

export default function PostView({ postId }: { postId: string | any }) {

	const { data, loading } = useFetchPost(postId);

	return (
		<div>
			{data ? (
			<div className="flex flex-col">
				<div className="text-2xl my-4 font-bold">
					{data.title}
				</div>
				<div className="border-b-2" />
				<div className="mx-4">
					<div className="my-4 italic">
						조회수: {data.viewCounts}
					</div>

					<div className="flex justify-center my-8">
						{data.imageUrl && (<img src={data.imageUrl} alt="Uploaded" width={200} height={200} />)}
					</div>

					<div className="min-h-60 p-4 border-y-4 shadow-md text-xl">
						{data.content}
					</div>
				</div>
				<ul className="m-4">
					{data.comments.map((cmt:CommentTemp, index:number) => (<CommentListItems key={index} cmt={cmt} />))}
				</ul>
				<div className="mx-4">
					<CommentForm />
				</div>
			</div>
			) : (
			loading ? (<div className="m-8"><Loading /></div>) : (<MessageBlock message="게시물을 불러올 수 없습니다." />)
			)}
		</div>
	)
}