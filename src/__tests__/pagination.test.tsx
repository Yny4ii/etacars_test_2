import { render, screen } from "@testing-library/react";
import { Pagination } from "../stories/pagination/Pagination";

describe("Pagination component", () => {
  it("Pagination render", () => {
    render(<Pagination limit={10} currentPage={1} pagination={() => {}} />);
    expect(screen.getByRole("list")).toHaveClass("pagination");
  });
});
