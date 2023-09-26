const idInput = document.querySelector("input[type=text]");
const pwInput = document.querySelector("input[type=password]");
const form = document.querySelector("form");
const alertText = document.querySelector("#alert");

function isInputLengthValid() {
    const MIN_LENGTH = 4;
    const MAX_LENGTH = 20;

    const idIsValid = idInput.value.length >= MIN_LENGTH && idInput.value.length <= MAX_LENGTH;
    const pwIsValid = pwInput.value.length >= MIN_LENGTH && pwInput.value.length <= MAX_LENGTH;

    if (!idIsValid || !pwIsValid) {
        alertText.textContent = "아이디와 비밀번호는 4자 이상 20자 이하여야 합니다.";
        return false;
    }
    return true
}

function cleanInput() {
    idInput.value = "";
    pwInput.value = "";
}

function handleSubmit(e) {
    e.preventDefault();
    if(!isInputLengthValid()) {
        return
    }
    console.log(idInput.value, pwInput.value);
    cleanInput();
    alertText.textContent = "로그인 성공!";
}

form.addEventListener("submit", e => handleSubmit(e));