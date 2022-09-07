import React from "react";
import { CurrencyTable } from "./pages/main/currencyTable";
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { CurrencyDetails } from "./pages/details/currencyDetails";

export const App = (): JSX.Element => {
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
