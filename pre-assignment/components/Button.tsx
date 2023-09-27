import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}
export default function Button({ children, disabled = false }: IButtonProps) {
  return <button disabled={disabled}>{children}</button>;
}
