const loginEmailInput = document.querySelector('input[name="email"]');
const loginPasswordInput = document.querySelector('input[name="password"]');
const loginBtn = document.querySelector(".login-btn");

function onClickLoginBtn(e) {
  e.preventDefault();
  console.log({
    email: loginEmailInput.value,
    password: loginPasswordInput.value,
  });
}

loginBtn.addEventListener("click", onClickLoginBtn);
