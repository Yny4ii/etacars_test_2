import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://powerful-dusk-72235.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
