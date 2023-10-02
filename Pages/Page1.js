import { routeChange } from "../route/route.js";
export default function Page1({ $target, initialState }) {
  const $element = document.createElement("div");
  $element.className = "Page1";
  $target.appendChild($element);

  this.render = () => {
    $element.innerHTML = `
    <h2>Login<h2/>
    <form>
        <label for="username">
            <input type="text" name="username" id="username" />
        </label>
        <label for="password">
            <input type="text" name="password" id="password" />
        </label>
        <input type="submit" name="submit" id="submitBtn">
    </form>
    <br/>
    <button class="page2">Go Page2</button>
    `;
  };

  $element.addEventListener("click", (e) => {
    if (e.target.name === "submit") {
      e.preventDefault();
      const { value: username } = document.querySelector("#username");
      const { value: password } = document.querySelector("#password");
      console.log(`username: ${username} password: ${password}`);
    } else if (e.target.className === "page2") {
      routeChange("page2");
    }
  });

  this.render();
}
