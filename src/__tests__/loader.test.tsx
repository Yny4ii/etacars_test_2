import { render, screen } from "@testing-library/react";
import { Loader } from "../stories/loader/loader";

describe("Loader component", () => {
  it("Loader render", () => {
    render(<Loader />);
    const loader = screen.getByText(
      (content, element) => element.tagName.toLowerCase() === "span"
    );
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass("loader");
  });
});
