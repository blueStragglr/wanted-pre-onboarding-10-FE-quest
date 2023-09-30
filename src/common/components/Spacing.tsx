import styled from 'styled-components';

interface SpacingProps {
  direction: 'vertical' | 'horizontal';
  size: number;
}

const Spacing = styled.div<SpacingProps>`
  flex: none;
  ${({ direction, size }) => {
    return direction === 'horizontal'
      ? `width: ${size}px`
      : `height: ${size}px`;
  }}
`;

export default Spacing;
