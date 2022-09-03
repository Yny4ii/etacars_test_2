import React, { useEffect } from "react";
import { getCurrencies } from "./redux/slices/currencySlices";
import { CurrencyTable } from "./pages/main/currencyTable";
import { Header } from "./components/header/header";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { Route, Routes } from "react-router-dom";
import { CurrencyDetails } from "./pages/details/currencyDetails";

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const offset = useAppSelector((state) => state.currencyReducer.offset);
  useEffect(() => {
    dispatch(getCurrencies(offset));
  }, [dispatch, offset]);

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<CurrencyTable />} />
          <Route path="currency/:id" element={<CurrencyDetails />} />
        </Routes>
      </div>
    </>
  );
};
