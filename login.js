const loginSubmitBtn = document.querySelector(".login-submit-btn");
const userId = document.getElementsByName("user-id");
const userPassword = document.getElementsByName("password");

loginSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!userId[0].value) {
    alert("아이디를 입력해주세요");
  } else if (!userPassword[0].value) {
    alert("비밀번호를 입력해주세요");
  } else {
    alert("콘솔에서 입력한 정보를 확인해주세요");
    console.log(`아이디: ${userId[0].value} \n비밀번호: ${userPassword[0].value}`);
  }
});
