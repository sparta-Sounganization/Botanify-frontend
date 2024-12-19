import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DebugToggleButton from "../components/block/DebugToggleButton";

const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Botanify",
  description: "반려 식물 관리 및 커뮤니티 서비스",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body id="body" className={`${inter.className} bg-white`}>
        {children}
        <DebugToggleButton />
        <a className="fixed bottom-16 right-7 underline text-blue-900" href="https://app.visily.ai/projects/8c7810e2-90ff-4547-854a-2e7f3d3d2a37/boards/1466872">wireframe link</a>
      </body>
    </html>
  );
}
