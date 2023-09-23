
fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
.then(res => res.json())
.then(data => setData(data));

const setData = (data)=>{
    const DATA = data;
    const key = Object.keys(DATA[0]);
    // const value = Object.values(DATA);
    const values = Object.values(DATA)
    console.log(key);
    console.log(values);

    const $table = document.getElementsByTagName('table');
    const $thead = $table[0].children[1];
    const $tbody = $table[0].children[2];

    const html_key = key.map((k) => `<th>${k}</th>`).join('');
    $thead.innerHTML = html_key;

    // const html_value
    const html_value = values.map((obj)=>{
        const arr = Object.values(obj).map((v) => `<td>${v}</td>`).join('');
        return `<tr>${arr}</tr>`;
    }).join('');

    $tbody.innerHTML = html_value;



    

   
    // const child = document.createElement('div');
    // const table = document.createElement('table');
    // const tr = document.createElement('tr');
    // const html = DATA.map((data) => `name: ${data.name}, id: ${data.id}<br>`).join('');
    // child.innerHTML = html;
    // document.body.append(child);
}
