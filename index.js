const LOGIN_FORM = document.getElementById("login-form");
const ID_INPUT = document.getElementById("id-input");
const PASSWORD_INPUT = document.getElementById("password-input");
const PRINT_BTN = document.getElementById("print-button");
const DATA_CONTAINER = document.getElementById("data-container");

const baseUrl = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";
let id = "";
let password = "";

const getInputData = () => {
  console.log('id, password: ', id, password);
};

const getMockData = async () => {
  const result = await fetch(baseUrl).then((res) => res.json());

  result.map((data) => {
    const divTag = document.createElement("div");
    divTag.textContent = `id: ${data.id}, name: ${data.name}`;
    DATA_CONTAINER.appendChild(divTag);
  });
};

getMockData();

LOGIN_FORM.addEventListener("submit", (e) => e.preventDefault());
ID_INPUT.addEventListener("change", (e) => (id = e.target.value));
PASSWORD_INPUT.addEventListener("change", (e) => (password = e.target.value));
PRINT_BTN.addEventListener("click", getInputData);
