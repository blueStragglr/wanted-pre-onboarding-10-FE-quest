"use client";

import React, { ComponentPropsWithoutRef } from "react";

import styled from "styled-components";

import { theme } from "@/styles/theme";

interface CommonButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}
const CommonButton = ({ children, ...rest }: CommonButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default CommonButton;

const StyledButton = styled.button`
  /* 공통 스타일 */
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;
  /* 색상 */
  background: ${theme.colors.main};

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray};
    opacity: 0.2;
  }

  &:hover:enabled {
    opacity: 0.5;
  }
  &:active:enabled {
    opacity: 0.5;
  }

  /* 버튼과 버튼 사이의 거리 */
  & + & {
    margin-left: 0.5rem;
  }
`;
