import { component$, $, useStore } from "@builder.io/qwik";
import "./LoginForm.css";
export default component$(() => {
  const loginInfo = useStore({ email: "", password: "" });
  const handleSubmit = $(() => {
    console.log(`email: ${loginInfo.email}`);
    console.log(`password: ${loginInfo.password}`);
  });
  return (
    <div class="wrapper">
      <div class="flip-card__front">
        <div class="title">Log in</div>
        <form
          class="flip-card__form"
          preventdefault:submit
          onSubmit$={handleSubmit}
        >
          <input
            class="flip-card__input"
            name="email"
            placeholder="Email"
            onInput$={(e: InputEvent) => {
              loginInfo.email = (e.target as HTMLInputElement).value;
            }}
          />
          <input
            class="flip-card__input"
            name="password"
            placeholder="Password"
            type="password"
            onInput$={(e: InputEvent) => {
              loginInfo.password = (e.target as HTMLInputElement).value;
            }}
          />
          <button class="flip-card__btn">Let`s go!</button>
        </form>
      </div>
    </div>
  );
});
