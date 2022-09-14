import { ModalForm, ModalFormProps } from "./modalForm";
import { Story } from "@storybook/react";
import { ChangeEvent, useState } from "react";

export default {
  title: "Example/Form",
  component: ModalForm,
};

const Template: Story<ModalFormProps> = (args: ModalFormProps) => {
  const [input, setInput] = useState<string>("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <ModalForm
      onAddButton={() => {}}
      onChangeInput={onChangeInput}
      input={input}
    />
  );
};
export const DefaultModalForm = Template.bind({});
DefaultModalForm.args = {};
