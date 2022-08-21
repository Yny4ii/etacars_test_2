import React from "react";

export interface ButtonProps {
  variant: string;
  onClick: (e: React.MouseEvent) => void;
  label: string;
}

export const Button = ({ variant, onClick, label }: ButtonProps) => {
  return (
    <button className={variant} onClick={onClick}>
      {label}
    </button>
  );
};

