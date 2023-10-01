const drawList = (data = []) => {
  const elWrapResultList = document.querySelector('#wrapResultList');
  let textAllLi = '';
  data.forEach(({ id, name }, index) => {
    textAllLi += `<li key='${index}_id'>${id}: ${name}</li>`;
  });
  elWrapResultList.innerHTML = `<ul>${textAllLi}</ul>`;
}

const getMockApiData = async () => {
  let result = {
    status: 0,
    statusText: '',
    data: [{
      id: '', 
      name: ''
    }],
  };

  try {
    const response = await callMockApi();
    const data = await response.json();
    result.status = response.status;
    result.statusText = response.statusText;
    result.data = data;
    
  } catch (error) {
    console.log('getMockApiData 에러났어용!');
    console.log(error);
  }

  return result;
}

const callMockApi = async () => {
  let result = null;  
  try {
    result = await fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock');  
  } catch (error) {
    console.log('callMockApi 에러났어용!');
    console.log(error);
  }
  return result;
}

export const drawAllData = async () => {
  const { status, statusText, data } = await getMockApiData();
  document.querySelector('#status').innerHTML = status;
  document.querySelector('#statusText').innerHTML = statusText;
  drawList(data);
}

