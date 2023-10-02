import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={() => navigate("/login")}>Go To Login</button>
      <button onClick={() => navigate("/menu")}>Go To Menu</button>
    </div>
  )
}
