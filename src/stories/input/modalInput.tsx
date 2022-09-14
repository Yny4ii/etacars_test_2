import React, { ChangeEvent } from "react";

export interface ModalInputProps {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  input: string;
  placeholder: string;
  autoFocus: boolean;
}

export const ModalInput = ({
  onChangeInput,
  input,
  placeholder,
  autoFocus,
}: ModalInputProps) => {
  return (
    <input
      onChange={(e) => onChangeInput(e)}
      value={input}
      autoFocus={autoFocus}
      className="modal-input"
      placeholder={placeholder}
    />
  );
};
