

fetch("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
.then( (response) => response.json())
.then( (data) => {
   let ttt = data;
   test(ttt);
})

function test(items) {
  console.log(items)
  for(let i=0; i < items.length; i++) {
    document.write(items[i].name)
    document.write( items[i].id)
    document.write('<br />')
    console.log(items[i].name, items[i].id)
  }
}