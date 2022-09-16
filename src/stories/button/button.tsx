import React from "react";

export interface ButtonProps {
  variant: string;
  onClick: (e: React.MouseEvent) => void;
  label: string;
  dataCy: string;
}

export const Button = ({ variant, onClick, label, dataCy }: ButtonProps) => {
  return (
    <button className={variant} onClick={onClick} data-cy={dataCy}>
      {label}
    </button>
  );
};
