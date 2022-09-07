import { gql } from "@apollo/client";

export const GET_CURRENCIES = gql`
  query Currency($limit:Int!, $offset:Int!){
  getCurrencies(limit:$limit, offset:$offset){
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
