import React from "react";
import { Main } from "./pages/main/main";
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { CurrencyDetails } from "./pages/details/currencyDetails";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="currency/:id" element={<CurrencyDetails />} />
        </Routes>
      </div>
    </>
  );
};
