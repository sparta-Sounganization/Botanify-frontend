import { useEffect, useState } from "react";
import { ApiRequest } from "../types/types";
import fetchWithToken from "./fetchWithToken";

export default function useRest<T>() {
    const [data, setData] = useState<T|null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const sendRequest = async (req:ApiRequest) : Promise<{ data:T|null }> => {
        try {
            setLoading(true);
            const response = await fetchWithToken(`${req.endpoint}`, {
                method: req.method,
                headers: req.headers,
                credentials: 'include',
                body: req.body ? JSON.stringify(req.body) : undefined,
            });
            const result = await response.json();
            if (!result) throw new Error(`API 서버 오류 (${response.status})`);
            setData(result)
            console.log(result);
            return {data:result};
        } catch (ex) {
            console.log(ex instanceof Error ? ex.message : "알 수 없는 오류가 발생했습니다.")
            return {data:null};
        } finally {
            setLoading(false);
        }
    };

    return {data,loading,sendRequest};
}