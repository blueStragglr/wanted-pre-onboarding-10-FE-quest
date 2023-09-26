const tableBody = document.querySelector('tbody');
const table = document.querySelector('table');
const API_URL = "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock";

async function requestApi() {
    try {
        const response = await fetch(API_URL,
        { method: 'GET' });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

function createTableRow(data) {
    const tr = document.createElement('tr');
    const tdNum = document.createElement('td');
    const tdName = document.createElement('td');

    tdNum.textContent = data.id
    tdName.textContent = data.name

    tr.appendChild(tdNum);
    tr.appendChild(tdName);
    return tr
}

async function paintTable() {
    try {
        const data = await requestApi();
        const tableFragment = document.createDocumentFragment();
        data.forEach(item => {
            const row = createTableRow(item);
            tableFragment.appendChild(row);
        });
        tableBody.appendChild(tableFragment);
    } catch (error) {
        const h2 = document.createElement('h2');
        h2.textContent = "데이터를 불러오는 중 알 수 없는 오류가 발생했습니다.";
        table.replaceWith(h2);
    }
}

paintTable();


