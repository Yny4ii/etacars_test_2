import React, { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { calcCurrentWallet, calcInitialWallet } from "../../helpers/calcWallet";
import { WalletModal } from "../walletModal/walletModal";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../graphql/queries/getCurrencies";
import { client } from "../../graphql/client";
import { TopCurrency } from "../../stories/list/topCurrency";
import { Wallet } from "../../stories/wallet/wallet";

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
  if (error) {
    console.log(error)
    return <h1>Error!</h1>;
  }
  else {
    const topCurrencies = data.getCurrencies.slice(0, 3);

    const currentPrice = calcCurrentWallet(walletCurrency, data.getCurrencies);
    const initialPrice = calcInitialWallet(walletCurrency);
    const walletDifference = currentPrice - initialPrice;
    const walletDifferencePercent = initialPrice
      ? (walletDifference / initialPrice) * 100
      : 0;
    return (
      <header className="header">
        <TopCurrency topCurrencies={topCurrencies} />
        <Wallet
          setModalActive={setModalActive}
          currentPrice={currentPrice}
          walletDifference={walletDifference}
          walletDifferencePercent={walletDifferencePercent}
        />
        {modalActive && (
          <WalletModal
            walletCurrency={walletCurrency}
            setActive={setModalActive}
          />
        )}
      </header>
    );
  }
};
