import React from "react";
import { Wallet } from "../../interfaces/Wallet";
import { floatFormat } from "../../helpers/floatFormat";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteCurrencyFromWallet } from "../../redux/slices/walletSlice";
import { Button } from "../../stories/button/button";
import { PieChart } from "../../stories/pieChart/pieChart";

interface WalletModalProps {
  setActive: (option: boolean) => void;
  walletCurrency: Wallet[];
}

export const WalletModal = ({
  setActive,
  walletCurrency,
}: WalletModalProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="modal" onClick={() => setActive(false)} data-cy={"modal"}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <p>Your wallet</p>
        <ul className="wallet-list">
          {walletCurrency.map((e) => (
            <li className="wallet-list__item" key={e.id}>
              <div>{e.name}</div>
              <div>${floatFormat(e.price)}</div>
              <div>{e.count}</div>
              <Button
                variant={"delete-button"}
                onClick={() => dispatch(deleteCurrencyFromWallet(e.id))}
                label={"delete"}
                dataCy={"wallet-delete-button"}
              />
            </li>
          ))}
        </ul>
        {walletCurrency.length && <PieChart walletCurrency={walletCurrency} />}
      </div>
    </div>
  );
};
