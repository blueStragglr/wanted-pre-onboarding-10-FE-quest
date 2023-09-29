//배열 안 객체 모음
//name필드, id필드
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const stateMessage = document.createElement('p');

const fetchApiHandler = async () => {
  tbody.appendChild(stateMessage);
  stateMessage.textContent = '로딩중';

  try {
    const response = await fetch(
      'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock'
    );

    if (!response.ok) {
      throw new Error('데이터 페치 실패');
    }

    const data = await response.json();
    stateMessage.textContent = '';

    data.forEach(element => {
      const tr = document.createElement('tr');
      tbody.appendChild(tr);

      const processedElement = {
        id: element.id,
        name: element.name,
      };

      for (const key in processedElement) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = processedElement[key];
      }
    });
  } catch (error) {
    console.error(error);

    tbody.appendChild(stateMessage);
    stateMessage.textContent = '데이터 가져오기 에러';
  }
};

fetchApiHandler();
