import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = styled.header`
  padding: 10px 0;
  text-align: center;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const NavTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
`;

const NavLink = styled.li`
  font-size: 16px;
`;
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
    <Header>
      <Navigation>
        <NavTitle>홈</NavTitle>
        <NavLinks>
          <NavLinks>
            <NavLink>
              <Link to="/login">로그인</Link>
            </NavLink>
          </NavLinks>
        </NavLinks>
      </Navigation>
    </Header>
  );
}
