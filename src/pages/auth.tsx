import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
  
    const base_url = process.env.NEXT_PUBLIC_SPRING_API_URL;

    const response = await fetch(`${base_url}/api/v1/users/me`, {
      headers: {
        cookie: req.headers.cookie || '', // 쿠키 전달
      },
    });
  
    if (response.ok) {
      const user = await response.json();
      return { props: { user } }; // 사용자 정보를 props로 전달
    }
  
    return { props: { user: null } }; // 인증되지 않은 사용자 처리
  };