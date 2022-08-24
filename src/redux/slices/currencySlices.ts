import axios from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Currency } from "../../interfaces/Currency";
import { History } from "../../interfaces/History";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../graphql/queries/getCurrencies";
import { client } from "../../graphql/client";
import { GET_CURRENCY_HISTORY } from "../../graphql/queries/getCurrencyHistory";

const api = "https://api.coincap.io/v2/assets";

interface InitialState {
  status: string;
  currencies: Currency[];
  history: History[];
}

const initialState: InitialState = {
  currencies: [],
  history: [],
  status: "loading",
};

export const getCurrencies = createAsyncThunk(
  "/currency/getCurrencies",
  async () => {
    const response = await client.query({ query: GET_CURRENCIES });
    const data = response.data;
    console.log(data);
    return data.getCurrencies;
  }
);

export const getCurrencyHistory = createAsyncThunk(
  "/currency/getCurrencyHistory",
  async (id: string) => {
    const response = await client.query({ query: GET_CURRENCY_HISTORY(id) });
    const data = await response.data;
    return data.getCurrencyHistory;
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCurrencies.fulfilled,
      (state, action: PayloadAction<Currency[]>) => {
        state.status = "success";
        state.currencies = action.payload;
      }
    );
    builder.addCase(getCurrencies.rejected, (state, action) => {
      console.log(action.error.message);
      state.status = "error";
      state.currencies = [];
    });
    builder.addCase(getCurrencies.pending, (state) => {
      state.status = "loading";
      state.currencies = [];
    });
    builder.addCase(
      getCurrencyHistory.fulfilled,
      (state, action: PayloadAction<History[]>) => {
        state.status = "success";
        state.history = action.payload;
      }
    );
    builder.addCase(getCurrencyHistory.rejected, (state) => {
      state.status = "error";
      state.history = [];
    });
    builder.addCase(getCurrencyHistory.pending, (state) => {
      state.status = "loading";
      state.history = [];
    });
  },
});

export const currencyReducer = currencySlice.reducer;
