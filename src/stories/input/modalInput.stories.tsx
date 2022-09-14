import { ModalInput, ModalInputProps } from "./modalInput";
import { Story } from "@storybook/react";
import { ChangeEvent, useState } from "react";

export default {
  title: "Example/Input",
  component: ModalInput,
};

const Template: Story<ModalInputProps> = (args: ModalInputProps) => {
  const [input, setInput] = useState<string>("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <ModalInput
      onChangeInput={onChangeInput}
      input={input}
      placeholder={"Enter the value..."}
      autoFocus={true}
    />
  );
};
export const DefaultModalInput = Template.bind({});
