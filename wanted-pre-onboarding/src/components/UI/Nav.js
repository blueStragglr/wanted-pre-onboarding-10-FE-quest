import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav({ children }) {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  `;

  const showList =
    children === "홈" ? (
      <li>
        <Link to={"/login"}>로그인</Link>
      </li>
    ) : (
      <li>홈</li>
    );
  return (
    <Nav>
      <h1>{children}</h1>
      <ul>{showList}</ul>
    </Nav>
  );
}
