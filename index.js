const loginForm = document.querySelector(".login-form");
const callApiBtn = document.getElementById("call-api-btn");

const submitHandler = (e) => {
  const id = e.target["user-id"];
  const pw = e.target["user-pw"];
  e.preventDefault();
  console.log(`[submit 결과] : 아이디: ${id.value}, 비밀번호 : ${pw.value}`);
  id.value = "";
  pw.value = "";
};

const createCardTemplate = (data) => {
  const cardContainer = document.querySelector(".card-flex-container");
  const div = document.createElement("div");
  const span = document.createElement("span");
  div.classList.add("card");
  span.innerText = `${data.id}. ${data.name}`;
  div.appendChild(span);
  cardContainer.appendChild(div);
};

const callApiHandler = async () => {
  const response = await fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock");
  const result = await response.json();
  result.forEach((data) => createCardTemplate(data));
};

loginForm.addEventListener("submit", submitHandler);
callApiBtn.addEventListener("click", callApiHandler);
