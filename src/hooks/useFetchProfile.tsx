import { User } from "../types/types";
import useFetch from "./useFetch"

export default function useFetchProfile() {
    const endpoint = "api/v1/users/me"
    return useFetch<User>(endpoint);
}