const API_URL = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";
const content = document.getElementsByClassName("content");
const table = document.getElementById("api_table");

fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("네트워크 응답이 실패했습니다.");
    }
    return response.json();
  })
  .then((data) => {
    const tbody = table.querySelector("tbody");
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("API 요청 중 오류 발생:", error);
    result_page.textContent = "API 요청 중 오류가 발생했습니다.";
  });
