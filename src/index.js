import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './App';
import DeliveryPage from "./pages/delivery/delivery";
import AboutUs from "./pages/abautUs/about";
import Main from "./pages/main/main";
import Katalog from './pages/katalog/katalog';
import ProductPage from './pages/productPageFolder/productPage';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Создание маршрутизатора с использованием флага v7_relativeSplatPath
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/", // Главная страница
        element: <Main />, // Компонент, который будет отображаться
      },
      {
        path: "/katalog", 
        element: <Katalog />,
      },
      {
        path: "/katalog/:itemId", // Маршрут для страницы товара
        element: <ProductPage />, // Компонент страницы товара
      },
      {
        path: "/delivery", 
        element: <DeliveryPage />, 
      },
      {
        path: "/about",
        element: <AboutUs />,
      }
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true,  // Включение флага для относительных путей
    v7_startTransition: true,     // Включение флага для обновления состояния
  },
});

const logPerformanceMetrics = (metric) => {
  console.log(metric); // Здесь будет объект со всеми метриками
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(logPerformanceMetrics);
