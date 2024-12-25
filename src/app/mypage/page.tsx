"use client"

import CardHeader from "@/src/components/area/CardHeader";
import SignInput from "@/src/components/block/SignInput";
import { DefaultView } from "@/src/components/view/DefaultView";
import useFetchProfile from "@/src/hooks/useFetchProfile";
import { UserData } from "@/src/types/types";
import { useEffect, useState } from "react";

export default function MyPage() {

    const { data, loading } = useFetchProfile();

    return (
        <DefaultView>
            <div>
                {!loading && data && (
                    <div>
                        <CardHeader headline={`"${data.username}"님의 마이페이지`} />
                        <div className="grid-cols-2">
                            <p>등급</p>
                            <p>{data.role}</p>
                            <p>지역</p>
                            <p>{data.city} {data.town} {data.address}</p>
                        </div>
                    </div>
                )}
            </div>
        </DefaultView>
    )
}