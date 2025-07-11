import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import { HashRouter } from 'react-router-dom'
import { RouterView } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <HashRouter>
      <RouterView />
    </HashRouter>
  // </React.StrictMode>
);
