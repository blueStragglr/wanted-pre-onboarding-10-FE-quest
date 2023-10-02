import { fetchPage2 } from "../api/api.js";

export default function Page2({ $target, initialState }) {
  const $element = document.createElement("div");
  $element.className = "Page2";
  $target.appendChild($element);

  this.render = async () => {
    const result = await fetchPage2();

    $element.innerHTML = `
      <h2>API<h2/>
      <div>${JSON.stringify(result)}</div>
      `;
  };

  this.render();
}
