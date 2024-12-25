import Loading from "../block/Loading";
import MessageBlock from "../block/MessageBlock";
import useFetchPost from "@/src/hooks/useFetchPost";

export default function PostView({ postId }: { postId: string | any }) {

	const {data,loading} = useFetchPost(postId);

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
					<div className="min-h-60 p-4 border-y-4 shadow-md text-xl font-serif">
						{data.content}
					</div>
				</div>
			</div>
			) : (
			loading ? (<div className="m-8"><Loading /></div>) : (<MessageBlock message="게시물을 불러올 수 없습니다." />)
			)}
		</div>
	)
}