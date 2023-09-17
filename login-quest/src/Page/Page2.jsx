import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
`;

const StyledBtn = styled.button`
  cursor: pointer;
  background-color: #eaeaea;
  color: #444444;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px #dadada solid;
  border-radius: 2px;
  padding: 4px 15px;
  font-size: 10pt;
  &:hover {
    border: 1px #c6c6c6 solid;
    box-shadow: 1px 1px 1px #eaeaea;
    color: #333333;
    background: #f7f7f7;
  }
`;

export default function Page2() {
  const [printFlag, setPrintFlag] = useState(false);
  const [printData, setPrintData] = useState([]);

  const handleRequest = async () => {
    const res = await axios.get("http://localhost:3000/api/fruit.json");

    if (res.status === 200) {
      const data = res.data;
      const renderedData = data.map((item) => (
        <div key={item.id}>
          Fruit: {item.fruit}, Id: {item.id}
        </div>
      ));
      setPrintData(renderedData);
      setPrintFlag(!printFlag);
    } else {
      setPrintData("데이터를 가져오지 못했습니다.");
    }
  };
  return (
    <>
      {printFlag ? (
        <div>{printData}</div>
      ) : (
        <StyledForm>
          <StyledBtn type="button" onClick={handleRequest}>
            호출결과
          </StyledBtn>
        </StyledForm>
      )}
    </>
  );
}
