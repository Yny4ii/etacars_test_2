import { render, screen } from "@testing-library/react";
import { Wallet } from "../stories/wallet/wallet";

describe("Wallet component", () => {
  it("Wallet render", () => {
    render(
      <Wallet
        setModalActive={() => {}}
        currentPrice={100}
        walletDifference={10}
        walletDifferencePercent={10}
      >wallet</Wallet>
    );
    const wallet = screen.getByText("wallet")
    expect(wallet).toBeInTheDocument();
    expect(wallet).toHaveClass("wallet");
  });
});
