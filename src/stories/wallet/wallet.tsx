import React from "react";
import { floatFormat } from "../../helpers/floatFormat";

export interface WalletProps {
  setModalActive: (option: boolean) => void;
  currentPrice: number;
  walletDifference: number;
  walletDifferencePercent: number;
}

export const Wallet = ({
  setModalActive,
  walletDifferencePercent,
  walletDifference,
  currentPrice,
}: WalletProps) => {
  return (
    <div className="wallet" onClick={() => setModalActive(true)}>
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
