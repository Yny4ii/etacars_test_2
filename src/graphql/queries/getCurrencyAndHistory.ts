import { gql } from "@apollo/client";

export const GET_CURRENCY_AND_HISTORY = gql`
  query CurrencyHistory($id:String!){
    getCurrencyHistory(id:$id) {
      time
      priceUsd
    }
    getCurrency(id:$id){
    name
    symbol
    priceUsd
    changePercent24Hr
    }
  }
 
`;
