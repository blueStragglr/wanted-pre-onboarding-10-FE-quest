import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const loginForm = () => {
    console.log();
  };
  return (
    <>
      <div>
        <form onSubmit={loginForm}>
          <input type="text"></input>
          <input type="text"></input>
          <button></button>
        </form>
      </div>
    </>
  );
}

export default App;
