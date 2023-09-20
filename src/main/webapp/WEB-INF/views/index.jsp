<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>login화면</title>
    <link href="/css/login.css" rel="stylesheet" type="text/css">
</head>
<script type="text/javascript">


function callFunction() {
    console.log("your id : " + document.querySelector("#id").value);
    console.log("your pw : " + document.querySelector("#pw").value);
}
function callAPI() {
    fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock',{method:"get"})
        .then(res => res.json())
        .then(data => alert(JSON.stringify(data)));
}
</script>
<body>
<div class="login-box">
    <h2>Login</h2>
    <form>0
        <div class="user-box">
            <input type="text" name="" id="id">
            <label>Username</label>
        </div>
        <div class="user-box">
            <input type="password" name="" id="pw">
            <label>Password</label>
        </div>
        <a href="#" onclick="callFunction()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            들어가기
        </a>
        <button name="submit" type="submit" id="contact-submit"  onclick="callAPI()" data-submit="...Sending">API 호출</button>
    </form>
</div>


</body>
</html>
