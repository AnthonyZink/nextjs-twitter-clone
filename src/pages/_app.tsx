import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { useApollo } from "../utils/apollo";

function MyApp({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialClientState);

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
