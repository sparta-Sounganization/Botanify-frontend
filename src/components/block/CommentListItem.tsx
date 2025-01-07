import { CommentTemp } from "@/src/types/types";

export default function CommentListItems({ cmt }: { cmt: CommentTemp }) {
    return (
        <li className="flex w-full">
            <div className="flex flex-row w-full p-2 border-b">
                <p className="w-24 font-semibold">{cmt.username}</p>
                {cmt.content}
            </div>
        </li>
    )
}