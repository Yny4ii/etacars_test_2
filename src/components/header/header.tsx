import React, { useState } from "react";
import { floatFormat } from "../../helpers/floatFormat";
import { useAppSelector } from "../../hooks/hooks";
import { calcCurrentWallet, calcInitialWallet } from "../../helpers/calcWallet";
import { WalletModal } from "../walletModal/walletModal";

export const Header = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const { currencies: walletCurrency } = useAppSelector(
    (state) => state.walletReducer
  );
  const currencies = useAppSelector(
    (state) => state.currencyReducer.currencies
  );
  const topCurrencies = currencies.slice(0, 3);

  const currentPrice = calcCurrentWallet(walletCurrency, currencies);
  const initialPrice = calcInitialWallet(walletCurrency);
  const walletDifference = currentPrice - initialPrice;
  const walletDifferencePercent = initialPrice
    ? (walletDifference / initialPrice) * 100
    : 0;

  return (
    <header className="header">
      <ul className="top-currency">
        {topCurrencies.map((e) => (
          <li className="top-currency__item" key={e.id}>
            {e.name} - ${floatFormat(e.priceUsd)}
          </li>
        ))}
      </ul>
      <div className="header__wallet" onClick={() => setModalActive(true)}>
        <div className="header__wallet-info">
          <div>${floatFormat(currentPrice)}</div>
          <div>
            {walletDifference > 0 ? "+" : ""}
            {floatFormat(walletDifference)}$
          </div>
          <div>{floatFormat(walletDifferencePercent)}%</div>
        </div>
      </div>
      {modalActive && (
        <WalletModal
          walletCurrency={walletCurrency}
          setActive={setModalActive}
        />
      )}
    </header>
  );
};
