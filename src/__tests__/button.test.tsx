import { render, screen } from "@testing-library/react";
import { Button } from "../stories/button/button";

describe("Button component", () => {
  it("Add button render", () => {
    render(
      <Button
        variant={"add-button"}
        onClick={() => null}
        label={"Add"}
        dataCy={"add-button"}
      />
    );
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getByText("Add")).toHaveClass("add-button");
  });

  it("Delete button render", () => {
    render(
      <Button
        variant={"delete-button"}
        onClick={() => null}
        label={"Delete"}
        dataCy={"delete-button"}
      />
    );
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toHaveClass("delete-button");
  });

  it("Back button render", () => {
    render(
      <Button
        variant={"back-button"}
        onClick={() => null}
        label={"<-"}
        dataCy={"back-button"}
      />
    );
    expect(screen.getByText("<-")).toBeInTheDocument();
    expect(screen.getByText("<-")).toHaveClass("back-button");
  });
});
