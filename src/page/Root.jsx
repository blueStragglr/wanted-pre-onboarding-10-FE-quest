import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Root = () => {
  return (
    <MainContainer>
      <Nav />
      <Outlet />
    </MainContainer>
  );
};

export default Root;

const MainContainer = styled.main`
  width: 70%;
  margin: 50px auto 0;

  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--color-primary-200);
`;
