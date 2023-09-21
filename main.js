
// page1 로그인 버튼 click event
const clickLoginBtn = function(){

  let id = document.getElementById('idInput').value ;
  let pw = document.getElementById('pwInput').value ;

  console.log('아이디 >>>' , id);
  console.log('비밀번호 >>>' , pw);

}


// page2 데이터 받아오기 버튼 click event
const getData = function(){
  $.ajax({
    type : "get", 
    url : "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock",
    success : function(res){
      setData(res)
    },
    error : function(){
    }
  });

  // 받아온 데이터 뿌려주기
  function setData(data){
    console.log(data)
    let _data = data;
    let dataList = document.getElementById('dataList');
    dataList.innerText = "";
    _data.map((d)=>{
      //ul 만들기
      const ulNode = document.createElement("ul");
      ulNode.setAttribute('class', 'listWrap');

      //li 만들기
      const liNodeId = document.createElement("li");
      liNodeId.setAttribute('class', 'id');
      liNodeId.innerText = d.id;
      ulNode.appendChild(liNodeId);

      const liNodeNm = document.createElement("li");
      liNodeNm.setAttribute('class', 'name');
      liNodeNm.innerText = d.name;
      ulNode.appendChild(liNodeNm);

      //ul에 li 넣어주기
      dataList.appendChild(ulNode);
    })
  }
}