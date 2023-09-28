import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>링크</h1>
      <Link to="/loginform">LoginForm</Link>
      <hr/>
      <Link to="/mockapi">Api</Link>
    </div>
  );
}

export default App;
