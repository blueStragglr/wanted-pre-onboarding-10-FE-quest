import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header>
      <Link to={"/"}>로그인</Link>
      <Link to={"/api"}>API 호출</Link>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "🌞 라이트 모드" : "🌝 다크 모드"}
      </button>
    </header>
  );
}

export default Header;
