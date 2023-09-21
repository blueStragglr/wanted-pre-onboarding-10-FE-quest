function onChangeId() {
    const userId = document.getElementById('user_id').value;
    console.log('userId::', userId)
}

function onChangePw() {
    const userPw = document.getElementById('user_pw').value;
    console.log('userPw::', userPw)
}

fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock').then((res) => res.json()).catch((err) => console.log(err));
