import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5">
            <div className="z-10 flex flex-col w-full items-center justify-between font-mono text-sm p-10 gap-10 ">
                <div className="mt-10 flex items-center justify-center gap-x-6 rounded-lg border-2 border-white border-spacing-4 pl-2">
                    <p> 로그인하기</p>
                    <Link
                        href="/login"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {' '}
                        이동{' '}
                    </Link>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6  rounded-lg border-2 border-white border-spacing-4 pl-2">
                    <p> api 테스트</p>
                    <Link
                        href="/apitest"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {' '}
                        이동{' '}
                    </Link>
                </div>
            </div>
        </main>
    );
}
