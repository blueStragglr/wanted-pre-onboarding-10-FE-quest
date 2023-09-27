const apiContainer = document.querySelector('.api-section');
const button = document.querySelector('.api-btn');

const paintTable = (data) => {
  const table = document.createElement('table');
  const trHead = document.createElement('tr');
  const idHead = document.createElement('th');
  const nameHead = document.createElement('th');

  idHead.append(document.createTextNode('ID'));
  nameHead.append(document.createTextNode('NAME'));

  trHead.append(idHead);
  trHead.append(nameHead);
  table.append(trHead);
  apiContainer.append(table);

  const result = data.map(({ name, id }) => {
    const trBody = document.createElement('tr');
    const idBody = document.createElement('td');
    const nameBody = document.createElement('td');

    idBody.append(document.createTextNode(id));
    nameBody.append(document.createTextNode(name));

    trBody.append(idBody);
    trBody.append(nameBody);
    table.append(trBody);
  });
};

const handleRequest = async () => {
  // 새로 요청 시 기존 테이블 제거
  if (apiContainer.children.length > 1) {
    const table = apiContainer.lastChild;
    apiContainer.removeChild(table);
  }

  console.log('Fetching...');

  const response = await fetch(
    'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock'
  );

  if (!response.ok) {
    return;
  }

  console.log('Done!');

  const data = await response.json();

  paintTable(data);
};

button.addEventListener('click', handleRequest);
