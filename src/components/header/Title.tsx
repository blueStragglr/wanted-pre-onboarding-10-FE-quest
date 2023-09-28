import { styled } from 'styled-components';

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <Text>{text}</Text>;
};

export default Title;

const Text = styled.p`
  font-size: min(80px, 12vw);
`;
