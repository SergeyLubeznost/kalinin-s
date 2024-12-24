import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import Preloader from './components/preloder/preloader'; // Импортируйте компонент прелоадера

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Симуляция загрузки данных
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 секунды

    return () => clearTimeout(timer); // Чистка таймера при размонтировании
  }, []);



  return (
    <>
      <Header />

      {(loading)?  <Preloader />:  <Outlet />}
     
      <Footer />
    </>
  );
}

export default Root;
