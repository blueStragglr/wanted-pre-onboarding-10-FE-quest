import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;

  &:focus {
    border: 3px solid ${(props) => props.theme.colors.main};
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    color: ${(props) => props.theme.colors.gray};
    transform: translateX(10px) translateY(-25px);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
    background-color: #fff;
  }

  &:not(:focus) + span {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const Label = styled.span`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.main};
  pointer-events: none;
  transition: 0.2s;
`;
