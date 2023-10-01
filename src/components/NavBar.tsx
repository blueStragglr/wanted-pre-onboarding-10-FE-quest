"use clinet";

import React from "react";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

import CommonButton from "@/components/common/CommonButton";

const NavBar = () => {
  return (
    <Nav>
      <NavButton name={{ ko: "홈", en: "" }} />
      <NavButton name={{ ko: "로그인", en: "login" }} />
      <NavButton name={{ ko: "호출결과", en: "get" }} />
    </Nav>
  );
};

interface NavButtonProps {
  name:
    | { ko: "홈"; en: "" }
    | { ko: "로그인"; en: "login" }
    | { ko: "호출결과"; en: "get" };
}
const NavButton = ({ name }: NavButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button
      onClick={() => router.push(`/${name.en}`)}
      disabled={pathname === `/${name.en}`}
    >
      {name.ko}
    </Button>
  );
};
export default NavBar;

const Nav = styled.nav`
  width: 90%;
  justify-content: flex-start;
`;

const Button = styled(CommonButton)`
  width: 100px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.gray};

  &:disabled {
    color: #fff;
    opacity: 0.2;
  }
`;
