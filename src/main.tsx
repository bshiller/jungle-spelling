import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import '@fontsource/fraunces/700.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/700.css';
import './styles/index.css';
import App from './App';

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
