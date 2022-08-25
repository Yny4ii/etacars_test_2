import { render, screen } from "@testing-library/react";
import { LineChart } from "../components/lineChart/lineChart";
import { History } from "../interfaces/History";
import "jest-canvas-mock";

describe("LineChart component", () => {
  it("LineChart render", () => {
    const history: History[] = [
      { priceUsd: "1", time: 2 },
      { priceUsd: "2", time: 4 },
      { priceUsd: "3", time: 5 },
    ];
    render(<LineChart history={history} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
