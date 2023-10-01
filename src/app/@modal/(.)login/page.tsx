"use client";
import React from "react";
import Login from "@/components/Login";
import Modal from "@/components/modal/Modal";
import styled from "styled-components";
const page = () => {
  return (
    <Modal>
      <Main>
        <Login />
      </Main>
    </Modal>
  );
};

export default page;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 1rem;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;
