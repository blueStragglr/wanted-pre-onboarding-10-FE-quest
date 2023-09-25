const IDInput = document.querySelector(".IDInput");
const PWInput = document.querySelector(".PWInput");
const LoginButton = document.querySelector(".LoginButton");
const ConsoleButton = document.querySelector(".ConsoleButton");

function ConsoleSubmit(event) {
  event.preventDefault();
  if (IDInput.value !== "") {
    console.log("ID:" + IDInput.value + ", PW:" + PWInput.value);
  } else {
    alert("아이디를 입력해주세요.");
  }
}

ConsoleButton.addEventListener("click", ConsoleSubmit);
