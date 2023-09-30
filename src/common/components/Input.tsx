import {
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import generateId from '../utils/generateId';
import styled from 'styled-components';
import colors from '../../style/colors';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
}

export const Input = ({
  label,
  children,
  bottomText,
  ...props
}: InputProps) => {
  const child = Children.only(children);
  const id = child.props?.id ?? generateId('input');
  const isError: boolean = child.props.error ?? false;

  return (
    <InputWrapper {...props}>
      <Label htmlFor={id}>{label}</Label>
      {cloneElement(child, { id, ...child.props })}
      {bottomText !== null && (
        <BottomText $isError={isError}>{bottomText}</BottomText>
      )}
    </InputWrapper>
  );
};

export default Input;

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}

Input.TextField = forwardRef(
  (
    { error, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return <InputText $error={error} {...props} ref={ref} />;
  },
);

const InputWrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  padding: 5px;
  font-weight: 500;

  color: ${colors.black100};
`;

const BottomText = styled.p<{ $isError: boolean }>`
  color: ${(props) => (props.$isError ? colors.red900 : colors.grey900)};
  margin-top: 2px;
  display: inline-block;
  font-size: 14px;
  padding: 0 5px;
`;

const InputText = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 0 16px;
  font-size: 15px;
  line-height: 48px;
  margin: 0;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: ${colors.white100};
  transition:
    background 0.2s ease,
    color 0.1s ease,
    box-shadow 0.2s ease;
  box-shadow: inset 0 0 0 1px
    ${(props) => (props.$error ? colors.red600 : colors.grey500)};
  &:focus {
    box-shadow: inset 0 0 0 2px
      ${(props) => (props.$error ? colors.red900 : colors.purple600)};
  }
`;
