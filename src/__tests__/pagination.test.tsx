import { render, screen } from "@testing-library/react";
import { Pagination } from "../stories/pagination/Pagination";

describe("Pagination component", () => {
  it("Pagination render", () => {
    const currenciesPerPage = 10;
    const totalCurrency = 100;

    render(
      <Pagination
        paginate={() => null}
        currenciesPerPage={currenciesPerPage}
        totalCurrency={totalCurrency}
      />
    );
    expect(screen.getByRole("list")).toHaveClass("pagination");
  });
});
