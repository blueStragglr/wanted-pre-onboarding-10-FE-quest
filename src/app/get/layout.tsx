"use client";

import React from "react";
import styled from "styled-components";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Main>
      <H1>호출결과</H1>
      {children}
    </Main>
  );
};

export default layout;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 50px;
`;

const H1 = styled.h1`
  margin-bottom: 20px;
`;
