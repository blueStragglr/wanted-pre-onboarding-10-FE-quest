const mockBtn = document.querySelector(".mock-btn");

mockBtn.addEventListener("click", () => renderUsers());

async function getUsers() {
  const url = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<div class="mock-wrapper">
      <p class="mock-id">id: ${user.id}</p>
      <p class="mock-name">name: ${user.name}</p>
    </div>`;

    html += htmlSegment;
  });

  const mockWrapper = document.querySelector(".mock");
  mockWrapper.insertAdjacentHTML("beforeend", html);
}
