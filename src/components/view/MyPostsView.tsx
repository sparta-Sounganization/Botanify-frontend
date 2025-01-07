import CardHeader from "../area/CardHeader";
import MessageBlock from "../block/MessageBlock";
import { useState } from "react";
import { Post } from "@/src/types/types";
import PostListItems from "../block/PostListItem";
import PageNavigator from "../area/PageNavigator";
import useFetchMyPosts from "@/src/hooks/useFetchMyPosts";

export default function MyPostsView() {
	const [pagenumber, setPagenumber] = useState<number>(1)
	const { data, loading } = useFetchMyPosts({ page: pagenumber });

	return (
		<div className="flex flex-col px-8">
			<CardHeader headline="내 활동" />
			{
				data ? (
					<>
						<ul className="space-y-4">
							{data.content.map((post: Post, index:number) => (<PostListItems key={index} post={post} />))}
						</ul>

						<PageNavigator pageHeader={data.page} setPage={setPagenumber} />
					</>
				) : (
					loading ? (<div></div>) : (<MessageBlock message="활동이 없습니다." />)
				)
			}
		</div>
	)
}