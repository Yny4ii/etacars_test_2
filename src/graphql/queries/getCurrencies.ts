import { gql } from "@apollo/client";

export const GET_CURRENCIES = (limit: number, offset: number) => gql`
  query {
    getCurrencies (limit:${limit}, offset:${offset}) {
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
