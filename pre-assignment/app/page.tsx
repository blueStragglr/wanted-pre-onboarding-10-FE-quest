import A from "@/components/common/A";

export default function Home() {
  return (
    <main className="flex mx-auto min-h-screen flex-col items-center justify-between py-10">
      <div className="flex gap-2">
        <A href="/login">로그인</A>
        <A href="/mock">mock</A>
      </div>
    </main>
  );
}
