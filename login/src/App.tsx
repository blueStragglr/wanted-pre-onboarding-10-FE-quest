import ApiCall from "./pages/ApiCall";
import Login from "./pages/Login";
import Route from "./components/Route";
import Router from "./components/Router";

function App() {
  return (
    <Router>
      <Route path="/" component={<Login />} />
      <Route path="/apicall" component={<ApiCall />} />
    </Router>
  );
}

export default App;
