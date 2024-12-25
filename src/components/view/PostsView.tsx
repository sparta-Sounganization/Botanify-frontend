import useFetchPosts from "@/src/hooks/useFetchPosts";
import { Post } from "@/src/types/types";
import PostListItems from "../block/PostListItem";
import PageNavigator from "../area/PageNavigator";
import Loading from "../block/Loading";
import MessageBlock from "../block/MessageBlock";
import { useState } from "react";
import DefaultHref from "../block/DefaultHref";
import CardHeader from "../area/CardHeader";

export default function PostsView() {
	const [pagenumber, setPagenumber] = useState<number>(1)
	const { data, loading } = useFetchPosts(pagenumber)

	return (
		<div className="flex flex-col px-8">
			
			<CardHeader headline="전체 인기글" >
				{true &&	// 로그인 시만
					(<DefaultHref label="글쓰기" href="posts/write" />)
				}
			</CardHeader>

			{
				data ? (
					<>
						<ul className="space-y-4">
							{data.content.map((post: Post, index) => (<PostListItems key={index} post={post} />))}
						</ul>

						<PageNavigator pageHeader={data.page} setPage={setPagenumber} />
					</>
				) : (
					loading ? (<div className="m-8"><Loading /></div>) : (<MessageBlock message="게시물이 없습니다." />)
				)
			}

		</div>
	);
}