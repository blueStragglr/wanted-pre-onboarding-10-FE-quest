const APIBox = document.querySelector(".APIBox");
const ApiTextBox = document.querySelector(".ApiTextBox");
const APICallButton = document.querySelector(".APICallButton");

if (ApiTextBox.innerHTML === "") {
  APIBox.classList.add("hidden");
}

function showAPI(data) {
  APIBox.classList.remove("hidden");

  for (let i = 0; i < data.length; i++) {
    let dataDiv = document.createElement("div");
    dataDiv.innerHTML = data[i].id + ". " + data[i].name;
    dataDiv.setAttribute("class", "DataBox");
    ApiTextBox.appendChild(dataDiv);
  }
}

function APICall() {
  fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
    .then((res) => res.json())
    .then((data) => showAPI(data));
}

APICallButton.addEventListener("click", APICall);
