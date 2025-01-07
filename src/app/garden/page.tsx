"use client";

import MessageBlock from "@/src/components/block/MessageBlock";
import { DefaultView } from "@/src/components/view/DefaultView";
import MyPlantsView from "@/src/components/view/MyPlantsView";
import { useState } from "react";

export default function Garden() {

    enum TAB_ENUM {
        MY_PLANTS, MY_POSTS
    };

    const [tab, setTab] = useState<TAB_ENUM>(TAB_ENUM.MY_PLANTS);

    return (
        <DefaultView>
            <button onClick={()=>setTab(TAB_ENUM.MY_PLANTS)}>내 식물</button>
            <button onClick={()=>setTab(TAB_ENUM.MY_POSTS)}>내 활동</button>

            {(tab == TAB_ENUM.MY_PLANTS) ? (<MyPlantsView />) : (<MessageBlock message="식물을 조회할 수 없습니다." />)}
        </DefaultView>
    );
}