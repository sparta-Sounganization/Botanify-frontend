import useFetchSpecies from "@/src/hooks/useFetchSpecies";
import CardHeader from "../area/CardHeader";
import PageNavigator from "../area/PageNavigator";
import Loading from "../block/Loading";
import MessageBlock from "../block/MessageBlock";
import SearchBar from "../block/SearchBar";
import { useState } from "react";
import { Species } from "@/src/types/types";
import Image from "next/image";

export default function SpeciesView() {

    const [pagenumber, setPagenumber] = useState<number>(1)
    const {data, loading} = useFetchSpecies({page: pagenumber})

    return (
        <div className="flex flex-col px-8">
            <CardHeader headline="품종 백과사전" />

            {
                data ? (
                    <>
                    <div className="flex flex-row justify-center px-16 gap-16 pb-6 mb-4 border-b-2">
                        <SearchBar />
                    </div>
                    <ul className="space-y-4">
                        {data.content.map((species:Species, index) => (
                            <div key={index} className="size-20">
                                <Image src={species.rtnFileUrl} alt="품종 이미지" width={30} height={30} />
                                <p>{species.plantName}</p>
                            </div>
                        ))}
                    </ul>
                    <PageNavigator pageHeader={data.page} setPage={setPagenumber} />
                    </>
                ) : (
                    loading ? (<div className="m-8"><Loading /></div>) : (<MessageBlock message="품종 사전을 불러오는 데에 실패했습니다." />)
                )
            }
        </div>
    )
}