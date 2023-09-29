import { component$ } from "@builder.io/qwik";
import "./LoginForm.css";
export default component$(() => {
  return (
    <div class="wrapper">
      <div class="flip-card__front">
        <div class="title">Log in</div>
        <form class="flip-card__form" action="">
          <input
            class="flip-card__input"
            name="email"
            placeholder="Email"
            type="email"
          />
          <input
            class="flip-card__input"
            name="password"
            placeholder="Password"
            type="password"
          />
          <button class="flip-card__btn">Let`s go!</button>
        </form>
      </div>
    </div>
  );
});
