import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgb(81, 57, 245);
`;

export const IdInput = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: rgb(245, 245, 245);
  border: none;
  border-radius: 5px;
  padding-left: 1rem;
`;

export const PasswordInput = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: rgb(245, 245, 245);
  border: none;
  border-radius: 5px;
  padding-left: 1rem;
`;

export const SaveWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SaveId = styled.input`
  margin-right: 0.5rem;
`;

export const SaveIdText = styled.span`
  font-size: 0.8rem;
`;

export const LoginButton = styled.button`
  width: 324px;
  height: 50px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: rgb(81, 57, 245);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
