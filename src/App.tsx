import "./App.css";
import { ApiCaller } from "./components/ApiCaller";
import { LoginForm } from "./components/LoginForm";

function App() {
  return (
    <>
      <LoginForm />
      <ApiCaller />
    </>
  );
}

export default App;
