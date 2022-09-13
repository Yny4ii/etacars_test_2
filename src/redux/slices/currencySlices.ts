import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  offset: number;
  limit: number;
  currentPage: number;
}

const initialState: InitialState = {
  offset: 0,
  limit: 10,
  currentPage: 1,
};
const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    paginate(state, action) {
      state.offset = (action.payload - 1) * state.limit;
      state.currentPage = action.payload;
    },
  },
});
export const { paginate } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
