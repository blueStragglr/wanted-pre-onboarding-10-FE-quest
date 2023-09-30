"use client";
import styled from "styled-components";
import CommonButton from "@/components/common/CommonButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Main>
      <ButtonWrapper>
        <CommonButton onClick={() => router.push("/login")}>
          로그인 페이지 가기
        </CommonButton>
        <CommonButton onClick={() => router.push("/get")}>
          호출 결과 보러 가기
        </CommonButton>
      </ButtonWrapper>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const ButtonWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
