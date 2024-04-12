//здесь подключаем все наше приложение на страницу
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Settings} from './const-information/constant';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesToVisit = {Settings.PlacesToVisit}
      offers = {offers}
      reviews={reviews}
    />
  </React.StrictMode>,
);

