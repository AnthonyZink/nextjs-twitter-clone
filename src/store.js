import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

const initialState = {
    isWriteTweetOpen: false,
    tweets: [],
};

const reducer = (state = initialState, { type, data = null }) => {
    switch (type) {
        case "INIT_TWEETS":
            return {
                ...state,
                tweets: data ? [...data] : [],
            };

        case "ADD_TWEET":
            return {
                ...state,
                tweets: [data, ...state.tweets],
            };

        case "OPEN_WRITE_TWEET_MODAL":
            return {
                ...state,
                isWriteTweetOpen: true,
            };
        case "CLOSE_WRITE_TWEET_MODAL":
            return {
                ...state,
                isWriteTweetOpen: false,
            };

        default:
            return state;
    }
};

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    );
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined;
    }

    // For SSG and SSR always create a new store
    if (typeof window === "undefined") return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}
