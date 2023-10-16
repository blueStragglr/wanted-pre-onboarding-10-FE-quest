import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUserInfo, logout } from "../api/login"

import classes from "./AuthLayout.module.css"

interface AuthLayoutPorps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutPorps) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const fetchUserProfile = async () => {
    const userProfileResponse = await getCurrentUserInfo();

    if (userProfileResponse) {
      setUsername(userProfileResponse?.userInfo.name)
    } else {
      navigate("/login");
    }
  }

  const logoutHandler = async () => {
    logout();
    alert("로그아웃 되었습니다.");
    navigate("/")
  }

  useEffect(() => {
    fetchUserProfile();
  }, [])

  return (
    <div className="container-auth">
      <header>
        <div className={classes.headerRight}>
          <p>{username}</p>
          <button onClick={logoutHandler}>logout</button>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
