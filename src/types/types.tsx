export interface UserToken {
    userId: number;
    imageSrc: string;
    nickname: string;
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
}

export interface PageHeader {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
}