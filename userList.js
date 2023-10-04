const result = [];

function getData() {
    fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
        .then((res) => res.json())
        .then(data => {
            const name = document.createElement("div");
            name.textContent = data.name;

            const userInfo = document.querySelector('#userList');
            userInfo.appendChild(name)
        })
        .catch((err) => console.log(err));
} 
