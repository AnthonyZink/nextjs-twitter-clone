import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { useApollo } from "../utils/apollo";
import { Provider } from "react-redux";
import { useStore } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialClientState);
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </Provider>
    );
}

export default MyApp;
