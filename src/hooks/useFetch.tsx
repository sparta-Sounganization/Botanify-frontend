import { useEffect, useState } from "react";
import env from "@/src/config/env";
import fetchWithToken from "./fetchWithToken";

export default function useFetch<T>(endpoint:string) {
    const [data, setData] = useState<T|null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchWithToken(`${endpoint}`);
                if (!response.ok) throw new Error(`API 서버 오류 (${response.status})`);
                const result = await response.json();
                setData(result);
            } catch (ex) {
                setError(ex instanceof Error ? ex.message : "알 수 없는 오류가 발생했습니다.")
            } finally {
                console.log(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint]);

    return {data, loading}
}