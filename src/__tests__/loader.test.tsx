import { render, screen } from "@testing-library/react";
import { Loader } from "../stories/loader/loader";

describe("Loader component", () => {
  it("Loader render", () => {
    render(<Loader children={"loader"} />);
    const loader = screen.getByText("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass("box");
  });
});
