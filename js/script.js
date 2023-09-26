const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const pw = document.getElementById("pw").value;

  console.log("아이디:", id);
  console.log("비밀번호:", pw);
});
