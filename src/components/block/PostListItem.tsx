import { Post } from "@/src/types/types";
import Image from "next/image";

export default function PostListItems({ post }: { post: Post }) {
	return (
		<li className="flex w-full items-center justify-between border-b pb-4">
			<div className="flex w-full flex-row gap-4">
				<img src="something" alt="post image" className="size-16 border-2 rounded-lg" />
				<div className="flex flex-col flex-grow">
					<p className="text-sm font-semibold text-gray-800">
						{post.title}
					</p>
					<p className="text-xs text-gray-500">
						게시글 ID: {post.id} · 조회수: {post.viewCounts}
					</p>
				</div>
			</div>
		</li>
	)
}