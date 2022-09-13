import React, { useState } from "react";
import Modal from "../../components/modal/modal";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Loader } from "../../stories/loader/loader";
import { Pagination } from "../../stories/pagination/Pagination";
import { Currency } from "../../interfaces/Currency";
import { paginate } from "../../redux/slices/currencySlices";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../graphql/queries/getCurrencies";
import { client } from "../../graphql/client";
import { CurrencyTable } from "../../stories/table/currencyTable";
import { useNavigate } from "react-router-dom";

export const Main = () => {
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
  const navigate = useNavigate();
  const onNavigateToCurrencyDetails =
    (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      navigate(`/currency/${id}`);
    };

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }
  return (
    <>
      <div className="container column">
        <CurrencyTable
          currencies={data.getCurrencies}
          setModalActive={setModalActive}
          setSelectedCurrency={setSelectedCurrency}
          onNavigate={onNavigateToCurrencyDetails}
        />
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
