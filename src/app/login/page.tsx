"use client";

import React from "react";
import styled from "styled-components";
import Login from "@/components/Login";

const page = () => {
  return (
    <Main>
      <Login />
    </Main>
  );
};

export default page;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 1rem;
  height: 100vh;
  width: 100%;
`;
