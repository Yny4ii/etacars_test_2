import { gql } from "@apollo/client";

export const GET_CURRENCIES = gql`
  query {
    getCurrencies {
      id
      rank
      symbol
      name
      supply
      maxSupply
      marketCapUsd
      volumeUsd24Hr
      priceUsd
      changePercent24Hr
      vwap24Hr
    }
  }
`;
