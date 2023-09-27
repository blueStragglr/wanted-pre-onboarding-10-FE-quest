import { useState, useCallback, ChangeEvent } from "react";
import MoveBtn from "./MoveBtn";

const inputType = [
  { title: "아이디 입력", name: "id" },
  { title: "비밀번호 입력", name: "password" },
];

const LoginBox = (): JSX.Element => {
  const [valueId, setValueId] = useState<string>("");
  const [valuePassword, setValuePassword] = useState<string>("");

  const changeInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, type } = e.target;

    if (type === "text") {
      setValueId(value);
    } else {
      setValuePassword(value);
    }
  }, []);

  const clickBtn = () => {
    console.log(`아이디 : ${valueId}, 비밀번호 : ${valuePassword}`);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-14">
        Wanted에 로그인하기
      </h1>
      <hr className="opacity-30 mb-24" />
      <div className="flex flex-col items-center">
        <form className="flex flex-col items-center justify-center mb-16">
          {inputType.map((type) => (
            <div key={type.name} className="flex flex-col gap-2 mt-4">
              <p className="text-3 font-medium">{type.title}</p>
              <input
                value={type.name === "id" ? valueId : valuePassword}
                onChange={(e) => changeInputValue(e)}
                type={type.name === "id" ? "text" : "password"}
                autoComplete="off"
                className="w-[300px] h-[40px] p-2 rounded-sm bg-[#E9F0FD] focus:outline-none text-black"
              />
            </div>
          ))}
        </form>
        <MoveBtn onClick={clickBtn} />
      </div>
      <hr className="opacity-30 mt-24" />
      <p className="mt-20 text-3 text-center font-bold cursor-pointer">
        <span className="font-medium opacity-50 cursor-auto">
          계정이 없나요?
        </span>{" "}
        Wanted 가입하기
      </p>
    </>
  );
};

export default LoginBox;
