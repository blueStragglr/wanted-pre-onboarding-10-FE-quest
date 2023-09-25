import { useRef } from "react"
import { Link } from "react-router-dom";

function App() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const submitInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('아이디: ', idRef.current?.value);
    console.log('비밀번호: ', pwRef.current?.value);
  }

  return (
    <>
      <form onSubmit={submitInfo}>
        <div>
          <label htmlFor="">아이디</label>
          <input type="text" ref={idRef} />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input type="text" ref={pwRef} />
        </div>
        <button type="submit">확인</button>
        <br />
        <Link to={'/pokemon'}>포켓몬 리스트로 이동</Link>
      </form>
    </>
  )
}

export default App
