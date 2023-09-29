import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LoginForm from "~/components/LoginForm/LoginForm";

export default component$(() => {
  return (
    <>
      <LoginForm />
    </>
  );
});

export const head: DocumentHead = {
  title: "Login",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
