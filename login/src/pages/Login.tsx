import { useState } from "react";
import { useRouter } from "../hooks/useRouter";

const Login = () => {
  const [id, setId] = useState<string | undefined>();
  const [pw, setPw] = useState<string | undefined>();
  const { push } = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(id, pw);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2"
      >
        <label>
          <span>ID : </span>
          <input
            type="text"
            className="border"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          <span>PW : </span>
          <input
            type="password"
            className="border"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <button
        className="p-2 text-lg border-black rounded-md border-[1px] bg-slate-50"
        onClick={() => push("/apicall")}
      >
        go to ApiCall
      </button>
    </div>
  );
};

export default Login;
