import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IPAddressContainer from './IPAdressContainer';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
  <React.StrictMode>
    <IPAddressContainer />
  </React.StrictMode>
);
