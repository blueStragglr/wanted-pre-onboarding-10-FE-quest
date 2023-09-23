const list = document.querySelector(".list");

window.onload = function () {
  fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      list.innerHTML = data
        .map(
          (item) => `
        <li>
          <div>${item.name}</div>
        </li>
      `
        )
        .join("");
    })
    .catch((error) => console.log(error));
};
