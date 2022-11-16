import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://kamar-data-gql.usepcm.xyz/graphql",
    cache: new InMemoryCache(),
});

export default client;