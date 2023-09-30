import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';

interface TxtProps extends HTMLAttributes<HTMLElement> {
  typography?: keyof typeof TYPOGRAPH_VARIANT;
  color?: string;
}

const Txt = ({ typography = 'p', ...props }: TxtProps) => {
  return <StyledTxt as={typography} typography={typography} {...props} />;
};

const TYPOGRAPH_VARIANT = {
  h1: css`
    font-size: 30px;
    font-weight: 900;
  `,
  h2: css`
    font-size: 24px;
    font-weight: 800;
  `,
  h3: css`
    font-size: 20px;
    font-weight: 700;
  `,
  p: css`
    font-size: 16px;
    font-weight: 400;
  `,
};

const StyledTxt = styled.span<TxtProps>`
  color: ${(props) => props.color};
  ${(props) => TYPOGRAPH_VARIANT[props.typography || 'p']}
  white-space: pre-line;
`;

export default Txt;
