import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CheckoutComponent } from './components/pages/CheckoutPage/CheckoutPageComponent';
import { CardPageComponent } from './components/pages/CardPage/CardPageComponent';
import LayoutComponent from './components/layout/LayoutComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app">
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="checkout" element={<CheckoutComponent />} />
            <Route path="item/:id" element={<CardPageComponent />} />
          </Routes>
        </LayoutComponent>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
