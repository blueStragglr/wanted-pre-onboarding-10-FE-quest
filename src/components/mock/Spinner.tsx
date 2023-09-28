import { styled } from 'styled-components';

const Spinner = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #8aa9c8;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
