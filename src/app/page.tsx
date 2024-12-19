"use client"

import { DefaultView } from "@/src/components/view/DefaultView"
import PostView from "@/src/components/view/PostView"

export default function MainPage() {
	return (
		<DefaultView>
			<PostView />
		</DefaultView>
	)
}