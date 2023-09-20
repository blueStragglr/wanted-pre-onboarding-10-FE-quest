// React
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const path = useNavigate();

  useEffect(() => {
    path("/login");
  }, []);

  return <></>;
}
