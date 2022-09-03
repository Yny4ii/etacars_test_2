import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "../../interfaces/Currency";
import { History } from "../../interfaces/History";
import { GET_CURRENCIES } from "../../graphql/queries/getCurrencies";
import { client } from "../../graphql/client";
import { GET_CURRENCY_HISTORY } from "../../graphql/queries/getCurrencyHistory";

interface InitialState {
  status: string;
  currencies: Currency[];
  history: History[];
  offset: number;
  limit: number;
  currentPage: number;
}

const initialState: InitialState = {
  currencies: [],
  history: [],
  status: "loading",
  offset: 0,
  limit: 10,
  currentPage: 1,
};

export const getCurrencies = createAsyncThunk(
  "/currency/getCurrencies",
  async (offset: number) => {
    const response = await client.query({ query: GET_CURRENCIES(10, offset) });
    const data = response.data;
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
  reducers: {
    paginate(state, action) {
      state.offset = (action.payload - 1) * state.limit;
      state.currentPage = action.payload;
    },
  },
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
export const { paginate } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
