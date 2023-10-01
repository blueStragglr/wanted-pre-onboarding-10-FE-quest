(function() {
  const elLoginForm = document.querySelector('#loginForm');
  const elLoginBtn = document.querySelector('#loginBtn');

  elLoginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const loginFormData = new FormData(elLoginForm);
    for (const [key, value] of loginFormData) {
      console.log(`${key}: ${value}`)
    }
  })
})()