import styled from "styled-components";
import Page1 from "./page/Page1";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Page1 />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
`;
export default App;
