"use client";

import styled, { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          <Wrapper>
            <NavBar />
            <Container>{children}</Container>
          </Wrapper>
          {modal}
        </body>
      </ThemeProvider>
    </html>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 40px 2px rgba(255, 192, 203, 0.25);
`;
