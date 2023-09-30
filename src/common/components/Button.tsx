import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../style/colors';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  return <StyledButton variant={variant} size={size} {...props} />;
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: 0 solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.1s ease;
  font-weight: 600;
  line-height: 26px;

  ${(props) => TYPE_VARIANTS[props.variant || 'primary']}
  ${(props) => SIZE_VARIANTS[props.size || 'medium']}
`;

const TYPE_VARIANTS = {
  primary: css`
    color: ${colors.white100};
    background-color: ${colors.purple800};
    &:hover {
      background-color: ${colors.purple900};
    }
  `,
  secondary: css`
    color: ${colors.black50};
    background-color: ${colors.grey100};
    &:hover {
      background-color: ${colors.grey200};
    }
  `,
};

const SIZE_VARIANTS = {
  medium: css`
    font-size: 16px;
    padding: 11px 16px;
  `,
  large: css`
    font-size: 18px;
    padding: 11px 22px;
  `,
};
