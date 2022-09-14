import React, { ChangeEvent } from "react";
import { Button } from "../button/button";
import { ModalInput } from "../input/modalInput";

export interface ModalFormProps {
  onAddButton: (e: React.FormEvent) => void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  input: string;
  children?: string;
}

export const ModalForm = ({
  onChangeInput,
  input,
  onAddButton,
  children,
}: ModalFormProps) => {
  return (
    <form className="modal-form" onSubmit={(e) => onAddButton(e)}>
      {children}
      <ModalInput
        onChangeInput={onChangeInput}
        input={input}
        placeholder={"Enter the value..."}
        autoFocus={true}
      />
      <Button
        variant={"add-button"}
        onClick={onAddButton}
        label={"Add"}
      ></Button>
    </form>
  );
};
