import React from "react";
import styled from "styled-components";

export default function Header({ children }) {
  const HeaderTitle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <HeaderTitle>
      <h1>{children}</h1>
    </HeaderTitle>
  );
}
