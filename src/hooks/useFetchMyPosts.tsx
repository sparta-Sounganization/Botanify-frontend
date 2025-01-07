import { PostQueries } from "../types/types";
import useFetch from "./useFetch";

export default function useFetchMyPosts(queries:PostQueries) {
    const params = new URLSearchParams(queries as Record<string,string>).toString();
    const endpoint = `/api/v1/user/posts?${params}`;
    return useFetch<any>(endpoint);
}