import { useParams } from 'react-router-dom';

import React, { useState } from 'react';

import "./productPage-desktop.css";
import "./productPage-laptop.css";
import "./productPage-tablet.css";
import "./productPage-mobile.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styleSwiperSliderProduct.css';
import data from '../main/data';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { itemId } = useParams();
    const product = data.find((item) => item.id === parseInt(itemId));

    const [selectedColor, setSelectedColor] = useState(Object.keys(product.color[0])[0]); 
    const handleColorClick = (color) => {
      setSelectedColor(color);
    };
  
    // Загрузите информацию о товаре с ID itemId
  
    return (
      <main className="main__product__page">
        <h1>Hello product {itemId}</h1>
        <section className="slider__select__color__container">
          <div className="select__color__semi__container">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper3"
            >
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide3">
                <img
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper4"
            >
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide4">
                <img
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                  alt="Описание изображения"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="select__color__semi__container">
            <div className="select__color__container">
              <div className="select__color__header">
                <h2>{product.title}</h2>
                <p className="select__color__header__likes">
                  {" "}
                  <Checkbox
                    className="image-like"
                    icon={<FavoriteBorder sx={{ color: "#EA899A" }} />}
                    checkedIcon={<Favorite sx={{ color: "#EA899A" }} />}
                  />{" "}
                  {product.likes}
                </p>
              </div>
              <p className="">Материал: {product.material}</p>
              <div className="select__color__block">
                <p>
                  <span>Цвет:</span>{" "}
                  {selectedColor}
                </p>
                <div style={{ display: "flex" }}>
                  {product.color.map((colorObj) =>
                    Object.entries(colorObj).map(([key, value]) => (
                      <div
                        key={value}
                        style={{
                          width: "35px",
                          height: "35px",
                          backgroundColor: value,
                          margin: "5px",
                          marginRight: "40px",
                          borderRadius: "50%",
                          cursor: "pointer",
                          border:
                            selectedColor === key
                              ? "2px solid rgba(89, 89, 89, 0.39)"
                              : "none",
                              boxShadow: selectedColor === key ? "0 3px 19px 7px rgba(89, 89, 89, 0.39)" : "none",
                        }}
                        onClick={() => handleColorClick(key)}
                      />
                    ))
                  )}
                </div>
              </div>

              <p>{product.price} р.</p>
            </div>
          </div>
        </section>
      </main>
    );
  };

  export default ProductPage