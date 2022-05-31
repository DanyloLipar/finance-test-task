import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTickersActions } from './store/action';
import { io } from 'socket.io-client';
import { TickersList } from './components/TickersList';
import './styles/App.scss';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io.connect('http://localhost:4000');
    socket.emit('start');
    socket.on('ticker', (response) => dispatch(setTickersActions(response)));
  }, [])

  return (
    <div className="finance">
      <h2 className='finance__logo'>Finance</h2>
      <div className='finance__items'>
        <TickersList />
      </div>
    </div>
  );
}

