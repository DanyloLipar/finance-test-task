import React from "react";
import { useSelector } from 'react-redux';
import { loadTickersSelector } from "../../store/selectors";
import { TickersCard } from "../TickersCard";
import './TickersList.scss';

export const TickersList = () => {
    const tickers = useSelector(loadTickersSelector);

    return (
        <>
            <ul className="list">
                {
                    tickers.map(tick => (
                        <li
                            key={tick.ticker}
                            className="list__ticker"
                        >
                            <TickersCard ticker={tick} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}