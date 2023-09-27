const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.input');

const handleSubmit = (e) => {
  e.preventDefault();

  const id = inputs[0].value;
  const pwd = inputs[1].value;

  if (id === '' || pwd === '') {
    return;
  }

  console.log('id:', id);
  console.log('pwd:', pwd);
};

form.addEventListener('submit', handleSubmit);
