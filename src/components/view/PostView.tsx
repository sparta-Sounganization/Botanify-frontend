"use client";

import React, { useEffect, useState } from "react";
import { PostPage, Post, PageHeader } from "@/src/types/types";
import PostLi from "../block/PostListItem";
import PageNavigator from "../area/PageNavigator";
import Loading from "../block/Loading";
import MessageBlock from "../block/MessageBlock";

export default function PostView() {
  const base_url = process.env.NEXT_PUBLIC_SPRING_API_URL;

  const [postpages, setPostpages] = useState<PostPage>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const setState = (res: PostPage) => {
    setPostpages(res)
    setPageNumber(res.page.number + 1)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${base_url}/api/v1/posts?page=${pageNumber}`);
        const data = await response.json()
        console.log(data)
        setState(data)
      } catch (error) {
        console.error("게시글 데이터를 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false)
      }
    };
    fetchPosts();
  }, [pageNumber]);

  return (
    <div className="flex flex-col px-8">

      <h2 className="text-3xl font-bold p-4 mb-4 border-b-4">전체 인기글</h2>

      {
        postpages ? (
          <>
            <ul className="space-y-4">
              {postpages.content.map((post: Post, index) => (<PostLi key={index} post={post} />))}
            </ul>

            <PageNavigator pageHeader={postpages.page} setPage={setPageNumber} />
          </>
        ) : (
          loading ? (<Loading />) : (<MessageBlock message="게시물이 없습니다." />)
        )
      }

    </div>
  );
}
