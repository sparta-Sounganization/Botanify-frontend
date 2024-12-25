import { PostPage } from "../types/types";
import useFetch from "./useFetch";

export default function useFetchPosts(pagenumber:number) {
    const endpoint = `api/v1/posts?page=${pagenumber}`;
    return useFetch<PostPage>(endpoint);
}