import { useRef } from "react";

const LoginPage = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form action="">
        <div>
          <label>id:</label>
          <input type="text" ref={idRef} />
        </div>
        <div>
          <label>pw:</label>
          <input type="password" ref={pwRef} />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (idRef) {
              console.log(idRef.current?.value);
            }
            if (pwRef) {
              console.log(pwRef.current?.value);
            }
          }}
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
