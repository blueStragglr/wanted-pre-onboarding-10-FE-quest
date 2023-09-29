import { css } from 'styled-components';
import { CSSProperties } from 'react';

export const bcColorGradient = css<{
  $bgColor: CSSProperties['backgroundColor'];
}>`
  background: ${({ $bgColor }) =>
    `linear-gradient(90deg, ${$bgColor} 0%, #FFFFFF 140%)`};
  transition: background 1s ease-in-out;

  &:hover {
    background: ${({ $bgColor }) => $bgColor};
  }
`;
