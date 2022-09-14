import { render, screen } from "@testing-library/react";
import { ModalForm } from "../stories/form/modalForm";

describe("Modal form component", () => {
  it("Modal form render", () => {
    render(
      <ModalForm
        onAddButton={() => {}}
        onChangeInput={() => {}}
        input={""}
        children={"form"}
      />
    );
    const modalForm = screen.getByText("form");
    expect(modalForm).toBeInTheDocument();
    expect(modalForm).toHaveClass("modal-form");
  });
});
