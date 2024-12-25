"use client"

import { DefaultView } from "@/src/components/view/DefaultView"
import PostsView from "@/src/components/view/PostsView"

export default function Community() {
    return (
        <DefaultView>
            <PostsView />
        </DefaultView>
    )
}