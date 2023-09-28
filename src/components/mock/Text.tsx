import { styled } from 'styled-components';

type TextProps = {
  text: string;
};

const Text = ({ text }: TextProps) => {
  return <Sentence>{text}</Sentence>;
};

export default Text;

const Sentence = styled.p`
  margin: 10px 0;
`;
