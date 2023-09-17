import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
`;

const StyledLink = styled(Link)`
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

export default function Main() {
  return (
    <StyledForm>
      <StyledLink to="/page1" style={{ textDecoration: "none" }}>
        페이지1
      </StyledLink>
      <StyledLink to="/page2" style={{ textDecoration: "none" }}>
        페이지2
      </StyledLink>
    </StyledForm>
  );
}
