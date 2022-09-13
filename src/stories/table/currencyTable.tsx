import React from "react";
import { Currency } from "../../interfaces/Currency";
import { CurrencyItem } from "../../components/currencyItem/currencyItem";

export interface CurrencyTableProps {
  currencies: Currency[];
  setModalActive: (option: boolean) => void;
  setSelectedCurrency: (option: Currency | null) => void;
  onNavigate?: (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const CurrencyTable = ({
  currencies,
  setSelectedCurrency,
  setModalActive,
  onNavigate,
}: CurrencyTableProps) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <th className="table__item">#</th>
          <th className="table__item">Coin</th>
          <th className="table__item">Price</th>
          <th className="table__item">Market cap</th>
          <th className="table__item">VWAP (24Hr)</th>
          <th className="table__item">Supply</th>
          <th className="table__item">Volume (24Hr)</th>
          <th className="table__item">Change (24Hr)</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map((currency: Currency) => (
          <CurrencyItem
            setSelectedCurrency={setSelectedCurrency}
            setActive={setModalActive}
            key={currency.id}
            {...currency}
            onNavigate={onNavigate}
          />
        ))}
      </tbody>
    </table>
  );
};
