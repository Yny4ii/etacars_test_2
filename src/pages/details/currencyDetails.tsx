import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LineChart } from "../../components/lineChart/lineChart";
import { Loader } from "../../stories/loader/loader";
import Modal from "../../components/modal/modal";
import { floatFormat } from "../../helpers/floatFormat";
import { Button } from "../../stories/button/button";
import { useQuery } from "@apollo/client";
import { GET_CURRENCY_AND_HISTORY } from "../../graphql/queries/getCurrencyAndHistory";
import { client } from "../../graphql/client";
import { Currency } from "../../interfaces/Currency";

export const CurrencyDetails = () => {
  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null
  );
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_CURRENCY_AND_HISTORY, {
    client,
    variables: {
      id: id,
    },
  });

  const onNavigateToCurrencyTable = () => {
    navigate(`/`);
  };

  const onClickPlusButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCurrency(selectedCurrency);
    setModalActive(true);
  };

  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }

  return (
    <>
      <div className="currency-details column">
        <div className="row">
          <Button
            variant={"add-button"}
            onClick={onClickPlusButton}
            label={"+"}
            dataCy={"details-add-button"}
          />
          <Button
            variant={"back-button"}
            onClick={onNavigateToCurrencyTable}
            label={"<-"}
            dataCy={"details-back-button"}
          />
        </div>

        <LineChart history={data.getCurrencyHistory} />
        <div className="currency-details__info-element">
          Name: {data.getCurrency.name}
        </div>
        <div className="currency-details__info-element">
          Symbol: {data.getCurrency.symbol}
        </div>
        <div className="currency-details__info-element">
          Price:
          {floatFormat(data.getCurrency.priceUsd)}$
        </div>
        <div className="currency-details__info-element">
          Changed:{floatFormat(data.getCurrency.changePercent24Hr)}%
        </div>
      </div>
      {modalActive && data.getCurrency && (
        <Modal selectedCurrency={data.getCurrency} setActive={setModalActive} />
      )}
    </>
  );
};
