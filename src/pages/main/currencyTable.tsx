import React, { useState } from "react";
import { CurrencyItem } from "../../components/currencyItem/currencyItem";
import Modal from "../../components/modal/modal";
import {useAppDispatch, useAppSelector, useWindowWidth} from "../../hooks/hooks";
import { Loader } from "../../stories/loader/loader";
import { Pagination } from "../../stories/pagination/Pagination";
import { Currency } from "../../interfaces/Currency";
import {paginate} from "../../redux/slices/currencySlices";

export const CurrencyTable = () => {
  const dispatch = useAppDispatch();
  const { currencies, status } = useAppSelector(
    (state) => state.currencyReducer
  );
  const {limit, currentPage} = useAppSelector(state=> state.currencyReducer)
  const pagination = (page:number)=>{
    dispatch(paginate(page))
  }
  const width = useWindowWidth();

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
                {width > 780 ? (
                  <th className="table__item">Market cap</th>
                ) : null}

                {width > 660 ? (
                  <th className="table__item">VWAP (24Hr)</th>
                ) : null}
                {width > 560 ? <th className="table__item">Supply</th> : null}

                {width > 890 ? (
                  <th className="table__item">Volume (24Hr)</th>
                ) : (
                  ""
                )}
                {width > 400 ? (
                  <th className="table__item">Change (24Hr)</th>
                ) : null}
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
          <Pagination limit={limit} currentPage={currentPage} pagination={pagination}/>
        </div>
      ) : null}
      {modalActive && (
        <Modal selectedCurrency={selectedCurrency} setActive={setModalActive} />
      )}
    </>
  );
};
