import { useParams } from 'react-router-dom';

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styleSwiperSliderProduct.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { itemId } = useParams();
  
    // Загрузите информацию о товаре с ID itemId
  
    return (
      <div>
        {/* Отобразите информацию о товаре */}
        <h1>Hello product {itemId}</h1>

        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="Описание изображения"/>
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
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Описание изображения"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="Описание изображения"/>
        </SwiperSlide>
      </Swiper>
      </div>
    );
  };

  export default ProductPage