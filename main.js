const loginForm = document.getElementById('login-form');
const loginBtns = document.getElementById('login-btns');

loginBtns.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(loginForm.userName.value);
  console.log(loginForm.userPassword.value);
});