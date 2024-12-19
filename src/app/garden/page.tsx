"use client"

import MessageBlock from "@/src/components/block/MessageBlock"
import { DefaultView } from "@/src/components/view/DefaultView"

export default function Garden() {
    return (
        <DefaultView>
            <MessageBlock message="로그인이 화면으로 이동합니다." />
        </DefaultView>
    )
}