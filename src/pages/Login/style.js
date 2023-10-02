import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

const primary100 = theme.color.primary100;
const primary200 = theme.color.primary200;
const primary300 = theme.color.primary300;
const accent = theme.color.accent;
// const fontColor = theme.color.text;
const fixedWidth = "300px";
const fixedHeight = "30px";

const Background = styled.div`
  width: calc(100vw - 8px);
  height: calc(100vh - 16px);

  display: flex;
  align-items: center;
`;

const Container = styled.div`
  border: solid 1px ${primary200};
  border-radius: 10px;

  text-align: center;

  padding: 10px;
  margin: 100px 100px;
`;

const Input = styled.input`
  border: none;
  padding: 0;
  outline: none;

  display: block;
  width: ${fixedWidth};

  border-bottom: 1px solid ${primary100};
`;

const Button = styled.button`
  display: block;
  width: ${fixedWidth};
  height: ${fixedHeight};

  color: white;
  background-color: ${primary100};
  border: none;
  padding: 0;

  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${accent};
    background-color: ${primary300};
    cursor: pointer;
  }
  &:active {
    color: ${accent};
    background-color: ${primary200};
    cursor: pointer;
  }
`;

export const LoginUI = {
  Background,
  Container,
  Input,
  Button,
};
