export interface User {
    username: string;
    role: string;
    city: string;
    town: string;
    address: string;
}

export interface PostPage {
    content: Post[];
    page: PageHeader;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    viewCounts: number;
    imageUrl: string | null;
}

export interface PostWithComments {
    title: string;
    content: string;
    viewCounts: number;
    imageUrl: string;
}

export interface CommonMessage {
    status: number;
    message: string;
}

export interface CommonIdMessage extends CommonMessage {
    id: number;
}

export interface ValidationMessage {
    status: number;
    cases: Record<string, string>;
}

export interface PageHeader {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

export interface UserData {
    username: string,
    role: string,
    city: string,
    town: string,
    address: string
}

export type ApiRequest = {
    endpoint: string,
    method: string,
    headers?: Record<string, string>,
    body?: any;
}