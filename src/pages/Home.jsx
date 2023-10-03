import { React, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p><Link to="/Login">Login</Link></p>
      <p><Link to="/API">API</Link></p>
    </div>
  );
}
