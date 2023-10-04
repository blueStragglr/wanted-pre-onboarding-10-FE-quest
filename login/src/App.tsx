import { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState<string | undefined>();
  const [pw, setPw] = useState<string | undefined>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(id, pw);
  };
  return (
    <div>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
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
    </div>
  );
}

export default App;
