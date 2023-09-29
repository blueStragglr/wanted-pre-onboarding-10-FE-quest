import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <Link href="/login">로그인 페이지로</Link>
      <Link href="/mock">api 호출 페이지로</Link>
    </>
  );
});

export const head: DocumentHead = {
  title: "Wanted Preonboarding",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
