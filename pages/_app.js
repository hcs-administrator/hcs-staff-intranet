import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

import { Menu } from '../components/Menu'

import { ApolloProvider } from "@apollo/client";

import client from "../apollo-client";
//import initApollo from '../apollo-client'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Menu />
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  ) 
}

export default MyApp