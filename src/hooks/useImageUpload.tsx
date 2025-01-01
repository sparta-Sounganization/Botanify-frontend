import { useState } from "react";

export default function useImageUpload(domain: string) {
	const [file, setFile] = useState<File | null>(null);
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [uploading, setUploading] = useState(false);
	const [message, setMessage] = useState("");

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleImageUpload = async () => {
		if (!file) {
			alert("이미지를 선택해 주세요.");
			return;
		}

		setUploading(true);
		setMessage("");

		try {
			const response = await fetch(`/api/v1/${domain}/images`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fileName: file.name }),
			});

			if (response.ok) {
				const { uploadUrl, imageUrl } = await response.json();

				const uploadResponse = await fetch(uploadUrl, {
					method: "PUT",
					headers: { "Content-Type": file.type },
					body: file,
				});

				if (uploadResponse.ok) {
					setImageUrl(imageUrl);
					setMessage("Image uploaded successfully!");
				} else {
					setMessage("Image upload failed.");
				}
			} else {
				setMessage("Failed to get presigned URL.");
			}
		} catch {
			setMessage("An error occurred while uploading the image.");
		} finally {
			setUploading(false);
		}
	};

	return {
		file,
		imageUrl,
		uploading,
		message,
		handleFileChange,
		handleImageUpload,
	};
}
