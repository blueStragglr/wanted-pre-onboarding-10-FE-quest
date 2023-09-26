const loginForm = document.querySelector(".form");

function loginSubmit(event) {
  event.preventDefault();

  const username = document.querySelector(".login__username");
  const password = document.querySelector(".login__password");

  console.log(`username: ${username.value}, password: ${password.value}`);

  username.value = "";
  password.value = "";
}

loginForm.addEventListener("submit", loginSubmit);
