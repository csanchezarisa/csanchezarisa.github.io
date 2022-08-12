import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css';

import './index.css';
import './i18n';
import App from './App';
import Loading from './components/Loading/Loading'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={Loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

reportWebVitals();
