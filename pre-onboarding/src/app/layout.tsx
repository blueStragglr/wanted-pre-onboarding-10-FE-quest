import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '10월 원티드 프리온보딩 프론트엔드 사전과제',
    description: '로그인, API 구현능력을 평가하는 사전과제',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex min-h-screen h-full w-full flex-col items-center p-8`}>
                <h1>10월 원티드 프리온보딩 프론트엔드 사전과제</h1>
                <div className="flex grow w-full h-full flex-col items-center justify-center">{children}</div>
            </body>
        </html>
    );
}
