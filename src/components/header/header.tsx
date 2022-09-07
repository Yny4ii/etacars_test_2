import React, { useState } from "react";
import { floatFormat } from "../../helpers/floatFormat";
import { useAppSelector } from "../../hooks/hooks";
import { calcCurrentWallet, calcInitialWallet } from "../../helpers/calcWallet";
import { WalletModal } from "../walletModal/walletModal";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../graphql/queries/getCurrencies";
import { client } from "../../graphql/client";
import { Currency } from "../../interfaces/Currency";

export const Header = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const { currencies: walletCurrency } = useAppSelector(
    (state) => state.walletReducer
  );
  const { loading, error, data } = useQuery(GET_CURRENCIES, {
    client,
    variables: {
      limit: 3,
      offset: 0,
    },
  });
  if (loading) return null;
  const topCurrencies = data.getCurrencies.slice(0, 3);

  const currentPrice = calcCurrentWallet(walletCurrency, data.getCurrencies);
  const initialPrice = calcInitialWallet(walletCurrency);
  const walletDifference = currentPrice - initialPrice;
  const walletDifferencePercent = initialPrice
    ? (walletDifference / initialPrice) * 100
    : 0;
  return (
    <header className="header">
      <ul className="top-currency">
        {topCurrencies.map((e: Currency) => (
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
