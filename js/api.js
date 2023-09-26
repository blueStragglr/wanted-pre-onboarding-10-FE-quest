const displayApi = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();

    const userList = document.querySelector(".api__list");
    userList.innerHTML = "";

    data.data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.classList.add("api__list-item");

      const userName = document.createElement("p");
      userName.textContent = `Name: ${user.first_name} ${user.last_name}`;
      userName.classList.add("api__username");

      const userEmail = document.createElement("p");
      userEmail.textContent = `Email: ${user.email}`;
      userEmail.classList.add("api__email");

      listItem.appendChild(userName);
      listItem.appendChild(userEmail);

      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};

displayApi();
