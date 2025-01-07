// 공통 ================================

// REST API 요청 형식
export type ApiRequest = {
    endpoint: string,
    method: string,
    headers?: Record<string, string>,
    body?: any;
}

// 페이지네이션 헤더
export interface PageHeader {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
}


// 게시글 전체 조회 ================================

export interface PostQueries {
    page?: number;
    size?: number;
    local?: boolean;
    sortBy?: string;
    order?: string;
    city?: string;
    town?: string;
    dateBefore?: Date;
    search?: string
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

// 품종 전체 조회

export interface SpeciesQueries {
    page?: number;
    size?: number;
    search?: string;
}

export interface SpeciesPage {
    content: Species[];
    page: PageHeader;
}

export interface Species {
    id: number;
    rtnFileUrl: string;
    plantName: string;
}



// 게시글 단건 조회 ================================


export interface PostWithComments {
    title: string;
    content: string;
    viewCounts: number;
    imageUrl: string;
    comments: CommentTemp[];
}

export interface CommentTemp {
    userId: number;
    username: string;
    content: string;
    replies: CommentTemp[]
}


// 응답 메시지 ================================


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


// 유저 정보 ================================


export interface UserData {
    username: string,
    role: string,
    city: string,
    town: string,
    address: string
}

export interface User {
    username: string;
    role: string;
    city: string;
    town: string;
    address: string;
}

