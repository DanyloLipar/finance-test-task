import React from "react";
import classnames from 'classnames';
import { useDispatch } from "react-redux";
import { setTickerNameAction } from "../../store/action";
import { usePrevious } from "../../usePrevious";
import './TickersCard.scss';

export const TickersCard = ({ ticker }) => {
    const prevCount = usePrevious(ticker.price);
    const dispatch = useDispatch();

    return (
        <div
            className="ticker"
            onClick={() => {
                dispatch(setTickerNameAction(ticker.ticker));
            }}
        >
            <div className="ticker__info info">
                <div className={classnames({
                    "info__icon": true,
                    'info__icon-up': !prevCount,
                    'info__icon-down': prevCount,
                })}>
                    {prevCount ? (
                        <svg focusable="false" width="16" height="16" viewBox="0 0 24 24" className="info__icon-image" fill="#c5221f">
                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" className="info__icon-image" fill="#137333">
                            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                        </svg>
                    )}
                </div>
                <div className="info__title">
                    <h5>{ticker.ticker}</h5>
                    <p>{ticker.price}</p>
                </div>
                <div className="info__difference">
                    {prevCount ? (
                        <div className="info__difference-down">
                            <h5>-{ticker.change_percent}%</h5>
                            <p>-{ticker.change}</p>
                        </div>
                    ) :
                        (<div className="info__difference-up">
                            <h5>+{ticker.change_percent}%</h5>
                            <p>+{ticker.change}</p>
                        </div>
                        )}
                </div>
            </div>
        </div >
    );
}