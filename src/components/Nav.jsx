import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <NavTitle>원티드 로그인 구현 과제</NavTitle>
      <NavAction>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
      </NavAction>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const NavTitle = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: var(--color-sub-400);
  transition: all 0.3s;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const NavAction = styled.div`
  display: flex;
  gap: 20px;

  padding: 20px;

  & > a {
    font-size: 18px;
    color: var(--color-primary-900);
  }

  & > a:hover {
    text-decoration: underline;
    transform: scale(1.09);
    font-weight: 800;
    color: var(--color-sub-400);
  }

  @media (max-width: 768px) {
    & > a {
      font-size: 15px;
    }
  }
`;
