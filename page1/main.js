// id, pw 입력 => 콘솔버튼 클릭
// - 입력하지 않을 경우, 입력하라는 메시지 출력
// - 입력했을 경우, id와 비번 출력

let idInput = document.getElementById("id-input")
let pwInput = document.getElementById("password-input")
const consoleLOG = document.getElementById("consoleLOG")

consoleLOG.addEventListener("click", ()=>{
    console.log("사용자 id: ", idInput.value);
    console.log("사용자 비밀번호: ", pwInput.value);

    if (idInput.value == "" || pwInput.value == ""){
        alert("id와 비밀번호를 입력하여 주시기 바랍니다.");
        console.log("id와 비밀번호를 입력하여 주시기 바랍니다.")
    }
})

