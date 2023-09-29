const form = document.querySelector('form');
const idInput = document.querySelector('.id-input');
const passwordInput = document.querySelector('.pw-input');
const inputAlert = document.createElement('p');
const button = document.querySelector('button');

function submitFormHandler(event) {
  event.preventDefault();

  if (!idInput.value) {
    button.parentNode.insertBefore(inputAlert, button);
    inputAlert.classList.add('input-alert');
    inputAlert.textContent = '아이디를 입력해 주세요.';
    return;
  }

  if (!passwordInput.value) {
    button.parentNode.insertBefore(inputAlert, button);
    inputAlert.classList.add('input-alert');
    inputAlert.textContent = '비밀번호를 입력해 주세요.';
    return;
  }

  console.log(`아이디: ${idInput.value} 비밀번호: ${passwordInput.value}`);
  inputAlert.textContent = '';
  idInput.value = '';
  passwordInput.value = '';
}

form.addEventListener('submit', submitFormHandler);
