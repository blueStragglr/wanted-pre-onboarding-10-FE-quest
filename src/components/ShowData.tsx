"use client";

import React from "react";
import styled from "styled-components";

import type { getType } from "@/types";

interface showDataProps {
  data: getType[];
}
const ShowData = ({ data }: showDataProps) => {
  return (
    <Wrapper>
      {data?.map((el) => (
        <Item key={el.id}>
          <p>{el.name}</p>
          {el.content && <p>{el.content}</p>}
          {el.date && <p>{el.date}</p>}
        </Item>
      ))}
    </Wrapper>
  );
};

export default ShowData;

const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  overflow: scroll;
`;

const Item = styled.div`
  border-bottom: 1px dashed ${(props) => props.theme.colors.gray};
  line-height: 30px;
  display: flex;
  &:last-child {
    border-bottom: none;
  }
  > p {
    border-right: 1px solid ${(props) => props.theme.colors.gray};
    padding: 5px;

    &:last-child {
      border: none;
    }
  }
`;
