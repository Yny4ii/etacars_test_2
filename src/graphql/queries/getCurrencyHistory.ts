import { gql } from "@apollo/client";

export const GET_CURRENCY_HISTORY = (id: string) =>
  gql`
  query {
    getCurrencyHistory(id:"${id}") {
      time
      priceUsd
    }
  }
`;
