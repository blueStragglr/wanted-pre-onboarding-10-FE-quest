async function getData() {
  try {
    const response = await fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
    const result = await response.json();
    console.log('result:::',result);
  } catch(error) {
    console.log(error)
  }
}
const data = fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock').then((res) => res.json()).catch((err) => console.log(err));
