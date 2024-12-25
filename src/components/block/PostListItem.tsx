import { Post } from "@/src/types/types";
import Image from "next/image";
import placeholder from "@/src/public/svg/placeholder.svg";

export default function PostListItems({ post }: { post: Post }) {
	return (
		<li className="flex w-full items-center justify-between border-b pb-4">
			<a href={`posts/${post.id}`} className="flex w-full flex-row gap-4 rounded-lg hover:bg-slate-100 transition-all">
				<Image src={post.imageUrl ? post.imageUrl : placeholder} alt="사진" width={64} height={64} className={`border-2 rounded-lg ${!post.imageUrl && "opacity-30"}`} />
				<div className="flex flex-col flex-grow">
					<p className="text-sm font-semibold text-gray-800">
						{post.title}
					</p>
					<p className="text-xs text-gray-500">
						게시글 ID: {post.id} · 조회수: {post.viewCounts}
					</p>
				</div>
			</a>
		</li>
	)
}