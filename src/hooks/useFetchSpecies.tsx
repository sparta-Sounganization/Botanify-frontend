import { SpeciesPage, SpeciesQueries } from "../types/types";
import useFetch from "./useFetch";

export default function useFetchSpecies(queries:SpeciesQueries) {
    const params = new URLSearchParams(queries as Record<string,string>).toString();
    const endpoint = `/api/v1/species?${params}`;
    return useFetch<SpeciesPage>(endpoint);
}