import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { startTickers } from '../api/startapi';

const initialState = {
    tickers: startTickers,
}

const LOAD_TICKERS = 'LOAD_TICKERS';

export const tickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TICKERS:
            return {
                ...state,
                tickers: action.payload,
            }

        default:
            return state;
    }
}

const store = createStore(tickersReducer, composeWithDevTools());

export default store;