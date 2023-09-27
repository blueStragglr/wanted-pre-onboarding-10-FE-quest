(function () {
  try {
    const loginForm = document.querySelector("#login-form");
    const idInput = document.querySelector("#id-input");
    const pwInput = document.querySelector("#pw-input");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      console.log(`아이디: ${idInput.value}`);
      console.log(`비밀번호: ${pwInput.value}`);
    });
  } catch (error) {
    alert(error.message);
  }
})();
