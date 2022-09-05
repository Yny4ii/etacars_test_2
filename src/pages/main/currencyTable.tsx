import React, { useState } from "react";
import { CurrencyItem } from "../../components/currencyItem/currencyItem";
import Modal from "../../components/modal/modal";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/hooks";
import { Loader } from "../../stories/loader/loader";
import { Pagination } from "../../stories/pagination/Pagination";
import { Currency } from "../../interfaces/Currency";
import { paginate } from "../../redux/slices/currencySlices";

export const CurrencyTable = () => {
  const dispatch = useAppDispatch();
  const { currencies, status } = useAppSelector(
    (state) => state.currencyReducer
  );
  const { limit, currentPage } = useAppSelector(
    (state) => state.currencyReducer
  );
  const pagination = (page: number) => {
    dispatch(paginate(page));
  };

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null
  );

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "error" && <h1>Error!</h1>}
      {status === "success" && currencies.length ? (
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
              {currencies.map((e) => (
                <CurrencyItem
                  setSelectedCurrency={setSelectedCurrency}
                  setActive={setModalActive}
                  key={e.id}
                  {...e}
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
      ) : null}
      {modalActive && (
        <Modal selectedCurrency={selectedCurrency} setActive={setModalActive} />
      )}
    </>
  );
};
