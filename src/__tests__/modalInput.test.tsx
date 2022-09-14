import { render, screen, fireEvent } from "@testing-library/react";
import { ModalInput } from "../stories/input/modalInput";
import { ChangeEvent, useState } from "react";

const ModalInputContainer = () => {
  const [input, setInput] = useState<string>("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <ModalInput
      onChangeInput={(e) => onChangeInput(e)}
      input={input}
      placeholder={"Enter the value..."}
      autoFocus={true}
    />
  );
};

describe("Modal input component", () => {
  it("Loader render", () => {
    render(<ModalInputContainer />);
    const modalInput = screen.getByRole("textbox");
    expect(modalInput).toBeInTheDocument();
    expect(modalInput).toHaveClass("modal-input");
    fireEvent.change(modalInput, { target: { value: "123" } });
    expect(modalInput.value).toBe("123");
  });
});
