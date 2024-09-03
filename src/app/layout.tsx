import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import './globals.css'

const inter = Noto_Sans_TC({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '中華民國 113 年國慶',
	description: '韓國魚的網頁太爛了，我幫他重弄一個',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="zh-tw">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
