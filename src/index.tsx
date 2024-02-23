//здесь подключаем все наше приложение на страницу
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import Settings from './constInformation/constant';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesToVisit = {Settings.PlacesToVisit}
    />
  </React.StrictMode>,
);

