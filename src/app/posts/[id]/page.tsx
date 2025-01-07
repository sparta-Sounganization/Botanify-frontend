"use client";

import { DefaultView } from "@/src/components/view/DefaultView";
import PostView from "@/src/components/view/PostView";
import { useParams } from "next/navigation";

export default function SinglePost() {

    const params = useParams<{id:string}>();

    return (
        <DefaultView>
            <PostView postId={params?.id} />
        </DefaultView>
    );
}