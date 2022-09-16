import React from "react";
import { floatFormat } from "../../helpers/floatFormat";

export interface WalletProps {
  setModalActive: (option: boolean) => void;
  currentPrice: number;
  walletDifference: number;
  walletDifferencePercent: number;
  children?: string;
}

export const Wallet = ({
  setModalActive,
  walletDifferencePercent,
  walletDifference,
  currentPrice,
  children,
}: WalletProps) => {
  return (
    <div className="wallet" onClick={() => setModalActive(true)} data-cy={"wallet"}>
      {children}
      <div className="wallet__info">
        <div>${floatFormat(currentPrice)}</div>
        <div>
          {walletDifference > 0 ? "+" : ""}
          {floatFormat(walletDifference)}$
        </div>
        <div>{floatFormat(walletDifferencePercent)}%</div>
      </div>
    </div>
  );
};
