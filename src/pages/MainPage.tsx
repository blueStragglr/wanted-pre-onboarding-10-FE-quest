import { useNavigate, Link } from "react-router-dom";
import Container from "../components/Container";
import MoveBtn from "../components/MoveBtn";

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  const moveLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Container>
        <h1 className="text-4xl font-bold mb-14">Wanted</h1>
        <hr className="opacity-30 mb-24" />
        <div className="text-center">
          <h2 className="text-3xl font-medium leading-[56px]">
            Wanted 10월 프리온보딩
            <br /> 프론트사전 과제
            <br /> 구경하러 가기
          </h2>
          <Link to="/getApi" className="text-sm text-[#65D26E]">
            click!{" "}
            <span className="text-white opacity-50">get API 페이지로 이동</span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 mt-[180px]">
          <p>로그인 페이지로 이동합니다!</p>
          <MoveBtn onClick={moveLogin} />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
