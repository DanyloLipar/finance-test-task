const LOAD_TICKERS = 'LOAD_TICKERS';

export const setTickersActions = (payload) => ({
    type: LOAD_TICKERS,
    payload,
});
