import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUserInfo } from "../api/login";

import classes from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    const userProfileResponse = await getCurrentUserInfo();

    if (userProfileResponse) {
      navigate("/menu");
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, [])
  
  return (
    <div className={classes.home}>
      <h2>Home</h2>
      <p>로그인을 하시면 menu를 확인할 수 있어요 😀</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  )
}
