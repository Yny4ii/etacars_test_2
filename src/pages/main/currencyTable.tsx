import React, { useState } from "react";
import { CurrencyItem } from "../../components/currencyItem/currencyItem";
import Modal from "../../components/modal/modal";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Loader } from "../../stories/loader/loader";
import { Pagination } from "../../stories/pagination/Pagination";
import { Currency } from "../../interfaces/Currency";
import { paginate } from "../../redux/slices/currencySlices";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../graphql/queries/getCurrencies";
import { client } from "../../graphql/client";

export const CurrencyTable = () => {
  const dispatch = useAppDispatch();

  const { limit, offset, currentPage } = useAppSelector(
    (state) => state.currencyReducer
  );
  const pagination = (page: number) => {
    dispatch(paginate(page));
  };

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null
  );
  const { loading, error, data } = useQuery(GET_CURRENCIES, {
    client,
    variables: {
      limit: 10,
      offset: offset,
    },
  });

  if (loading) return <Loader />;
  if (error) return <h1>Error</h1>;
  return (
    <>
      <div className="container column">
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
            {data.getCurrencies.map((currency:Currency) => (
              <CurrencyItem
                setSelectedCurrency={setSelectedCurrency}
                setActive={setModalActive}
                key={currency.id}
                {...currency}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          limit={limit}
          currentPage={currentPage}
          pagination={pagination}
        />
      </div>
      {modalActive && (
        <Modal selectedCurrency={selectedCurrency} setActive={setModalActive} />
      )}
    </>
  );
};
