import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { getLibrary } from './config/web3';
import { Web3ReactProvider } from '@web3-react/core';

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Web3ReactProvider>,
  document.getElementById('root')
);
