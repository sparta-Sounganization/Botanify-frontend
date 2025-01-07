import { PostPage, PostQueries } from "../types/types";
import useFetch from "./useFetch";

export default function useFetchPosts(queries:PostQueries) {
    const params = new URLSearchParams(queries as Record<string,string>).toString();
    const endpoint = `/api/v1/posts?${params}`;
    return useFetch<PostPage>(endpoint);
}