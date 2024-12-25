import SearchBar from "@/src/components/block/SearchBar";
import ProfileIcon from "../block/ProfileIcon";
import Image from 'next/image';
import botanify_icon from '@/src/public/Botanify_icon.png';
import DefaultHref from "../block/DefaultHref";
import useFetchProfile from "@/src/hooks/useFetchProfile";
import Loading from "../block/Loading";

export const NavBar = () => {

  const {data, loading} = useFetchProfile();

  return (
      <div className="container px-4 py-3 flex gap-4 justify-between">

        {/* 로고 */}
        <a href="/" className="flex items-center">
          <Image src={botanify_icon} alt="Botanify Logo" className="size-16" />
          <h1 className="text-3xl font-bold text-green-600">BOTANIFY</h1>
        </a>

        <DefaultHref label="커뮤니티" href = '/community' disabled={false} />
        <DefaultHref label="내 식물" href = '/garden' disabled={false} />
        {/* <DefaultHref label="공지사항" href = '/announces' disabled={true} /> */}
        {/* <DefaultHref label="이벤트" href = '/events' disabled={true} /> */}

        <SearchBar />

        {
          loading ? (
            <Loading />
          ) : (
            !data ? (
              <>
                <DefaultHref label="로그인" href = '/auth/signin' disabled={false} />
                <DefaultHref label="회원가입" href = '/auth/signup' disabled={false} />
              </>
            ):(<ProfileIcon user={data} />)
          )
        }
      </div>
    );
  };
  