import Image from "next/image";
import botanify_main from "@/src/public/Botanify_main.png";

export default function AuthView({children}: Readonly<{children: React.ReactNode}>|any) {
	return (
		<div className="flex h-screen">

			{/* Left Section */}
			<div className="flex-1 bg-white flex items-center justify-center">
				<div className="w-full max-w-md px-6">
					<h1 className="text-3xl font-bold text-center mb-8">회원 가입</h1>
					
					{children}

				</div>
			</div>

			{/* Right Section */}
			<div className="hidden md:flex flex-1 bg-gray-100 items-center justify-center">
				<div className="text-center">
					<Image
						src={botanify_main}
						alt="Botanify Logo"
						className="size-96 hover:animate-pulse"
					/>
				</div>
			</div>
		</div>
	)
}