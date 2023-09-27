import React from "react";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: (event: React.FormEvent<any>) => void;
}
export default function Button({
  className,
  children,
  disabled = false,
}: IButtonProps) {
  return (
    <button
      className={`p-2 border border-white rounded-md hover:border-green-500 hover:text-green-500 transition-all ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
