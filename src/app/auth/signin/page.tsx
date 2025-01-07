"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {

		e.preventDefault();

		const response = await fetch(`/api/v1/auth/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			// 로그인 성공 시 리디렉션
			router.push("/community"); // 예시로 '/protected' 페이지로 리디렉션
		} else {
			const data = await response.json();
			setErrorMessage(data.message || "로그인 실패.");
		}
	};

	return (
		<div>
			<h1>로그인 (Signin)</h1>
			<form onSubmit={handleLogin}>
				<div>
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">로그인</button>
			</form>
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	);
}
