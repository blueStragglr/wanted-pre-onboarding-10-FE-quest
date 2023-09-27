import A from "@/components/A";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-2">
        <A href="/login">로그인</A>
        <A href="/mock">mock</A>
      </div>
    </main>
  );
}
