import Image from "next/image";
import placeholder from "@/src/public/svg/placeholder.svg";
import { UserToken } from "@/src/types/types";

export default function ProfileIcon({user}:{user:UserToken}) {
	return (
		<a href="/me" className="relative flex flex-col items-center my-auto mx-5">
			<span className={`
          bg-lime-400 border-2 border-gray-500 text-white 
          size-12 rounded-full overflow-clip
          flex items-center justify-center
          `
			}>
				<Image src={placeholder} alt="profile icon" width={32} height={32} />
			</span>
			<span className="absolute bottom-[-22] whitespace-nowrap text-sm text-gray-700">{user.nickname}</span>
		</a>
	)
}