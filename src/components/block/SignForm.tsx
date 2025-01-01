import SignInput from "./SignInput";

export default function SignForm() {
	return (
		<>
			<form className="space-y-4">
				<SignInput type="text" label="Full name" placeholder="Input first name" />
				<SignInput type="text" label="Full name" placeholder="Input first name" />
				<SignInput type="text" label="Full name" placeholder="Input first name" />
				{/* Password */}
				<div className="grid grid-cols-2 gap-4">
					<SignInput type="text" label="Full name" placeholder="Input first name" />
					<SignInput type="text" label="Full name" placeholder="Input first name" />
				</div>
				{/* Address */}
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Address
					</label>
					<div className="flex">
						<button
							type="button"
							className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600"
						>
							Find Address
						</button>
						<input
							type="text"
							placeholder="click 'Find Address'"
							className="flex-1 rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
						/>
					</div>
				</div>

				{/* Terms and Policy */}
				<div className="flex items-center">
					<input
						type="checkbox"
						id="terms"
						className="h-4 w-4 text-green-600 border-gray-300 rounded"
					/>
					<label
						htmlFor="terms"
						className="ml-2 text-sm text-gray-600"
					>
						By signing up, I agree with the{" "}
						<a
							href="#"
							className="text-green-600 hover:underline"
						>
							Terms of Use
						</a>{" "}
						&{" "}
						<a
							href="#"
							className="text-green-600 hover:underline"
						>
							Privacy Policy
						</a>
					</label>
				</div>

				{/* Sign Up Button */}
				<button
					type="submit"
					className="w-full py-2 px-4 bg-green-600 text-white rounded-md shadow hover:bg-green-600"
				>
					회원 가입
				</button>

			</form>
			{/* 로그인으로 이동 */}
			<div className="text-center text-sm text-gray-600 mt-4">
				계정이 있는 경우{" "}
				<a href="/auth/signin" className="text-green-600 hover:underline">로그인</a>
			</div>

			{/* Social Buttons */}
			<div className="mt-6 flex justify-center space-x-4">
				<button className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center">
					G
				</button>
				<button className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center">
					K
				</button>
			</div>
		</>
	)
}