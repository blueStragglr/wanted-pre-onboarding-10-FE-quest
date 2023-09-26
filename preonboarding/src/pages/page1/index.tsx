/**
 * 페이지 1
 * - 아이디, 비밀번호를 입력할 수 있는 폼이 있는 페이지
 * - 클릭해서 아이디, 비밀번호를 콘솔에 출력할 수 있는 버튼
 */

import { useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const Page1 = () => {
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();

  const clickGo = () => {
    if (id && pw) {
      console.log(`ID : ${id} / PW : ${pw}`);
      alert("콘솔 창을 확인해주세요!");
    } else {
      alert("값을 입력해주세요!");
    }
  };

  return (
    <MainContainer>
      <div className="id-pw-section">
        <div className="id-pw">
          <p className="label-text">ID</p>
          <input
            className="input-box"
            onChange={(e) => setId(e?.target.value)}
          />
        </div>
        <div className="id-pw">
          <p className="label-text">PW</p>
          <input
            className="input-box"
            onChange={(e) => setPw(e?.target.value)}
          />
        </div>
      </div>

      <motion.div
        className="btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <p onClick={() => clickGo()}>Go!</p>
      </motion.div>
    </MainContainer>
  );
};

export default Page1;

const MainContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .id-pw-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .id-pw {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;
    }
    .input-box {
      border: none;
      height: 3rem;
      width: 13rem;
      padding-left: 1rem;
    }
    .label-text {
      color: #000;
      font-family: SUIT Variable;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      margin: 0;
    }
  }
  .btn {
    background-color: #898989;
    color: #fff;
    font-family: SUIT Variable;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    width: 7rem;
    height: 7rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
