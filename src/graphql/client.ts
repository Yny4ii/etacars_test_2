import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://crypto-back-h5gg.onrender.com/graphql",
  cache: new InMemoryCache(),
});
