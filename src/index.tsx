import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import { BrowserRouter } from 'react-router-dom'
import { RouterView } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <RouterView />
    </BrowserRouter>
  // </React.StrictMode>
);
