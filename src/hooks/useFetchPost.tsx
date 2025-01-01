import { PostWithComments } from "../types/types";
import useFetch from "./useFetch";

export default function useFetchPost(postId:string) {
    const endpoint = `/api/v1/posts/${postId}`;
    return useFetch<PostWithComments>(endpoint);
}