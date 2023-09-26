const apiData = document.querySelector('.mock');
let mockData;

fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
  .then((response) => response.json())
  .then((data) => {
    mockData = data; // 데이터를 변수에 할당
    // 화면에 데이터를 표시하거나 다른 작업을 수행할 수 있습니다.
    displayMockData(mockData);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// 데이터를 화면에 표시하는 함수

function displayMockData(data) {
  const mockContainer = document.querySelector('.mock'); // 화면에 데이터를 표시할 요소 선택
  mockContainer.innerHTML = ''; // 내용 초기화

  // 데이터를 화면에 표시
  data.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.textContent = item.name; //  title 속성을 화면에 출력
    mockContainer.appendChild(itemElement);
    console.log(item);
  });
}
