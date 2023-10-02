import { LoginUI } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleBlurChange = () => {};
  /** 제출하기 버튼 */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /** 아이디와 비밀번호를 콘솔에 출력 */
    console.log("username: ", username);
    console.log("password: ", password);

    if (username.trim() === "" && password.trim() === "") {
      setErrorText("아이디 또는 비밀번호가 입력되지 않았습니다.");
      return;
    } else if (username.trim() === "") {
      setErrorText("아이디가 입력되지 않았습니다.");
      return;
    } else if (password.trim() === "") {
      setErrorText("비밀번호가 입력되지 않았습니다.");
      return;
    } else {
      setErrorText("");
    }

    /** 로그인 로직 추가 */
    /** 서버에 로그인 정보를 보내고 응답을 받아 처리하는 로직 */
    // const response = await APIInstance.get("authmock");
    // console.log(response.data);
    console.log("로그인 성공!");
    navigate("/main");
  };
  return (
    <LoginUI.Background>
      <LoginUI.Container>
        <section>
          <h1>LOGIN PAGE</h1>
        </section>
        <section>
          <form onSubmit={handleSubmit}>
            <label>
              {/* <h2>ID</h2> */}
              <LoginUI.Input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                onBlur={handleBlurChange}
                placeholder="insert your ID"
              />
            </label>
            <br />
            <label>
              {/* <h2>PASSWORD</h2> */}
              <LoginUI.Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handleBlurChange}
                placeholder="insert your PW"
              />
            </label>
            <br />
            <LoginUI.Button type="submit">LOGIN</LoginUI.Button>
          </form>
        </section>
      </LoginUI.Container>
      <section>{errorText && <div>{errorText}</div>}</section>
    </LoginUI.Background>
  );
}

export default Login;
