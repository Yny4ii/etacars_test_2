import { ButtonProps, Button } from "./button";
import { Story } from "@storybook/react";

export default {
  title: "Example/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);
export const AddButton = Template.bind({});
AddButton.args = {
  variant: "add-button",
  label: "Add",
};
export const DeleteButton = Template.bind({});
DeleteButton.args = {
  variant: "delete-button",
  label: "Delete",
};

export const BackButton = Template.bind({});
BackButton.args = {
  variant: "back-button",
  label: "<-",
};

