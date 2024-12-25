import {useState} from "react";
import { Link } from 'react-router-dom';


import "./main.css";
import './main-laptop.css';
import "./main-slider.css";
import "./main-tablet.css";
import "./sliderStyle/slider-tablet.css";
import "./slider-bestseller-laptop1500.css";
import "./sliderStyle/slider-mobile.css";
import "./sliderStyle/slider-laptop.css";
import "./main-mobile.css";
import "./bestseller-section.css";
import "./bestseller-tablet.css";
import "./bestseller-mobile.css";
import "./bestseller-laptop.css";
import "./main-form.css";
import "./main-form-tablet.css";
import "./main-form-mobile.css";
import "./main-form-laptop.css";
import "./modal-form-style/modal-form-desktop.css";
import "./modal-form-style/modal-form-mobile.css";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination,FreeMode, Autoplay } from 'swiper/modules';

import logoMain from "./image-main/Group 61.svg";
import galochka from './image-main/galochka.svg';
import shesternya from './image-main/shesterenka.svg';
import korona from './image-main/korona.svg';
// import from slider img
import semiElipse from './image-main/Ellipseslide1.png';
import elipse from './image-main/EllipseFullslide1.png';
import zerkalo from './image-main/slider-img/для баннера 1.png';
import strelka from './image-main/slider-img/right.svg';
import sizeBanner from './image-main/slider-img/Group 58.png';
import bigElipse from "./image-main/bestseller-img/Ellipse 21.svg";
import smallElipse from "./image-main/bestseller-img/Ellipse 20.svg";
import telega from "./image-main/telega.svg";
import telegramm from "../../image/icons8-телеграм.svg";
//изображения модального окна
import VKontakte  from '../../components/footer/icon-footer/VK.svg';
import data from "./data.js";
import closeModal from "../../components/main-dialog/closeImg.svg";
import telegramModal from "./image-main/telega.svg";

import FormDialogModal from "../../components/main-dialog/main-modal.js";

function Main() {
    const [swiperInstance, setSwiperInstance] = useState(null);


    const CustomNextButton = ({ onClick }) => {
        return (
          <button className="custom-next-button" onClick={onClick}>
            <img src={strelka} alt="Next" />
          </button>
        );
      };
      
      const CustomPrevButton = ({ onClick }) => {
        
        return (
          <button className="custom-prev-button" onClick={onClick}>
            <img src={strelka} alt="Previous" />
          </button>
        );
      };

      const [open, setOpen] = useState(false);

    return (
        <main>
            <section className="section-main">
                <div className="main-container">
                    <div className="logo-main">
                        <img src={logoMain} alt="" />
                    </div>
                    <h1 className="main-title">ГРИМЁРНЫЕ СТОЛЫ <br />И ЗЕРКАЛА ДЛЯ ВАС</h1>
                    <div className="main-btn-group">
                        <button className="main-btn-catalog">Каталог</button>
                        <Button className="main-btn-contact" variant="contained" onClick={()=> setOpen(true)}>Связаться</Button> 
                    </div>

                    <FormDialogModal active={open}  setActive={setOpen}>
                      <div className="modal__form">
                        <div className="modal__form__header">
                        <img src={closeModal} alt="close" onClick={()=> setOpen(false)}/>
                        </div>
                        <p className="modal__form__title">
                        Оставьте <span style={{ fontWeight: 'bold', color: '#EA899A'}}>свои данные</span>,<br className="space2"/> и мы с вами свяжемся
                        </p>
                        <div className="modal__form__main">
                        <img src={telegramModal} alt="" />
                          <form >
                            <input className="modal__form__input" type="text" placeholder="Введите имя"/>
                            <input className="modal__form__input" type="tel" placeholder="Введите телефон"/>
                            <Button className="modal__form__button" variant="contained">Отправить</Button> 
                          </form>
                        </div>
                        <div className="modal__social__connection">
                            <h3>А так же вы можете написать нам в соц. сети</h3>
                            <div className="modal__social__icon__container">
                              <div>
                              <Link to={"https://vk.com/katerina__kalinina"} target="_blank">
                              <img src={VKontakte} alt="" />
                              </Link>
                              </div>
                              <div>
                              <Link to={"https://t.me/KalininyDelayut"} target="_blank">
                              <img src={telegramm} alt="" />
                              </Link>
                              </div>
                            </div>
                          </div>
                      </div>


                    </FormDialogModal>
                </div>
              
            </section>
            <section className="guarantees">
                <div className="guarantees-container">
                    <div className="guarantees-item">
                        <img  className="position-guarantees-img" src={galochka} alt="" />
                        <div className="position-guarantees">
                            <h3 className="guarntes__title">Гарантия</h3>
                            <div className="accordion__container">
                            <Accordion style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon style={{ fontWeight: 'bold', color: '#EA899A'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="accordion__paragraph">Несколько слов об условиях гарантии:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion__paragraph">
          В случае если у вас сломается например: розетка,выключатель,<br />подсветка,направляющие.
Вы можете написать нам.<br />
Нужно будет предъявить бланк заказа,подтверждающий покупку и наши мастера произведёт ремонт в кратчайшие сроки- бесплатно(по гарантии).<br />
<br />
К сожалению мы не можем дать гарантию на сам материал(лдсп).<br />
Так как тут зависит все от правильной эксплуатации. <br />
Но мы можем дать рекомендации,при соблюдении которых, мебель из этого материала сможет прослужить вам до 20 лет (как заявляет производитель материала лдсп)<br />
И вот правила и рекомендации по эксплуатации:<br />
<br />
Для сохранения и поддержания мебели в хорошем состоянии в течение длительного срока необходимо соблюдать следующие правила:<br />
<br />
1. Беречь поверхности мебели от механических повреждений.<br />
2. Во избежание набухания щитов не допускайте прямого попадания воды на торцы деталей. Ламинация защищает плиту от проникновения влаги внутрь, но сквозь микрощель, имеющуюся между ламинатом и кромочным материалом, вода легко впитается, что приводит к неизбежному разбуханию и деформации детали. Поэтому после уборки, все поверхности должны протираться насухо. Не допускайте застоя воды на столешницах и деталях из ЛДСП, так как это приведет к разбуханию и деформации столешницы.<br />
3. Не допускать сильных перепадов температур. Оптимальная температура эксплуатации мебели от +10 до +35 градусов С. Более низкая или высокая температура может привести к отслоению кромочного материала, пленки ПВХ ( при наличии в изделии деталей МДФ, облицованных пленкой ПВХ). Избегать попадания прямых солнечных лучей на изделие. Не следует ставить на поверхность горячие предметы без теплоизоляционной прокладки.<br />
4. Во избежание порчи фурнитуры (петли, ручки и др.) хранить пищевые кислоты в закрытых сосудах.<br />
5. Поверхность мебели разрешается чистить влажной тканью с последующей протиркой насухо, а также использовать специальные средства по уходу за мебелью. Запрещается применять эфир, ацетон, бензин и т.д.<br />
6. Лицевую фурнитуру следует чистить мягкими тканями с применением хозяйственного мыла, после чего вытирать насухо. Не использовать средства, содержащие абразивные материалы (наждачную бумагу, соду и др.)<br />
7. На крышки рабочих столов, вязки и полки не допускается прикладывать нагрузку более 30 кг.<br />
<br />

Особые рекомендации по уходу и эксплуатации изделий из лдсп:<br />
<br />
1. Избегать повышенной влажности. Рекомендуем установить принудительную вытяжку в зоне установки плиты.<br />
2. Исключить близкое расположение осветительных и нагревательных приборов (не ближе 200 мм), а также попадания прямых солнечных лучей, во избежание деформации, отслоения или изменения оттенка облицовочного покрытия.<br />
3. Исключить пагубное воздействие высоких температур от открытого духового шкафа, включенной плиты, обогревателей.<br />
<br />
Особые рекомендации по уходу и эксплуатации  изделий с кухонной столешницей:<br />
1. Исключить такие факторы, как высокая влажность, экстремальные температуры и прямые солнечные лучи.<br />
2. Все открытые края перед монтажом должны быть защищены доступным на рынке средством, типа водонепроницаемого клея (силиконовый герметик), плинтусом для столешниц, торцевыми планками.<br />
<br />
<span style={{ fontWeight: 'bold', color: 'red' }}>ВНИМАНИЕ!</span> Продавец не несет ответственность за последствия от несоблюдения установленных норм и правил по уходу и эксплуатации корпусной мебели.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
                        </div>

                    </div>
                    <div className="guarantees-item">
                        <img className="position-guarantees-mid-img" src={shesternya} alt="" />
                        <div className="position-guarantees-mid-div">
                            <h3 className="guarntes__title">Бесплатная установка</h3>
                            <div className="accordion__container">
                            <Accordion style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon style={{ fontWeight: 'bold', color: '#EA899A' }}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="accordion__paragraph">Несколько слов об условиях бесплатной установки и сборки:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion__paragraph">
          Наша компания ставит в приоритет качественно собранную мебель.
Поэтому доставляем ее мы в собранном виде,что гарантирует идеальную профессиональную сборку. 
Единственное что мы перевозим отдельно-это зеркала,для их безопасности. 
Но при доставке мы бесплатно устанавливаем зеркала к столикам.
В итоге наша установка занимает 10-15 минут.
И вы получаете идеальную профессиональную сборку и установку от нашей доставки👍
Это безусловно удобно и экономит ваше время.
С любовью ваша мебельная компания <span style={{ fontWeight: 'bold', color: '#EA899A' }}>#калининыделают</span> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
                        </div>

                    </div>
                    <div className="guarantees-item">
                        <img className="position-guarantees-last-img" src={korona} alt="" />
                        <div className="position-guarantees-last-div">
                            <h3 className="guarntes__title">Лучшие материалы</h3>
                            <div className="accordion__container">
                            <Accordion style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon style={{ fontWeight: 'bold', color: '#EA899A' }}/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className="accordion__paragraph">Несколько слов о материалах:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion__paragraph">
          Наша компания дорожит своей репутацией и делает мебель только из проверенных,качественных материалов.
Мы долгие годы выбирали лучших поставщиков и сочетали материалы лдсп и кромку к ним.
ЛДСП – стандартная плита и важный материал для производства мебели и оформления интерьера. 
ЛДСП (продукт на основе плиты ДСП, облицованной декоративной бумагой, 
пропитанной меламиновой смолой) - это самый широко используемый материал для современной мебели,  
который доступен с различными покрытиями, включая глянцевые, матовые,
 слегка рельефные и древесные структуры.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="slider-section">
    
            <Swiper
        cssMode={true}
        onSwiper={setSwiperInstance}
        navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
        pagination={true}
        loop={true}
        modules={[Navigation, Pagination,Autoplay]}
        className="mySwiper"
        slidesPerView={1} // Измените параметр для адаптивности
        spaceBetween={30} // Отступы между слайдами
        breakpoints={{
          640: {
            slidesPerView: 1, // Для ширины более 640 пикселей
          },
          1024: {
            slidesPerView: 1, // Для ширины более 1024 пикселей
          },
        }}

        autoplay={{
          delay: 4500, // задержка в миллисекундах
          disableOnInteraction: false, // чтобы автопрокрутка не отключалась при взаимодействии с слайдом
      }}
      >

        <SwiperSlide><div className="slide1">
            <div className="banner-container">
                <div className="elipse-container">
                <img className="semiElipse" src={semiElipse} alt="" /><img className="elipse" src={elipse} alt="" />
                </div>
                <div className="other-container">
                    <h3>
                    Получи в подарок <br /> зеркало в полный рост!
                    </h3>
                    <p>При заказе от 100 000 рублей</p>
                    <button>
                        К покупкам
                    </button>
                </div>
               
            </div>
            <div className="zerkalo-container">
                <img className="size-banner" src={sizeBanner} alt="" /><img className="zercalo" src={zerkalo} alt="" />
            </div>
            </div></SwiperSlide>
        <SwiperSlide>
            <div className="slide1 slide2">
        <div className="banner-container">
            
                <div className="other-container other__con-slide2">
                    <h3>
                    Подарок для вас!
                    </h3>
                    <p>При покупке от 50 рублей - банкетка в подарок!</p>
                    <p className="other__con-slide2-paragpaph">Не упустите возможность!</p>
                    <button>
                        К покупкам
                    </button>
                </div>
               
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide1 slide3">
        <div className="banner-container">
            
                <div className="other-container other__con-slide3">
                    <h3>
                    Специальное предложение!
                    </h3>
                    <p>При покупке на сумму от 10 000 ₽ вы получаете съемные разделители в ящике в подарок!</p>
                    <button>
                        К покупкам
                    </button>
                </div>
               
            </div>
            </div>
            </SwiperSlide>
      
      

            <CustomPrevButton onClick={() => swiperInstance && swiperInstance.slidePrev()} />
            <CustomNextButton onClick={() => swiperInstance && swiperInstance.slideNext()} />
      </Swiper>
      
            </section>

            <section className="section-bestseller">
            <h2>Бестселлеры</h2>
            <div>
        </div>

            <div className="bestseller-container">
           
            <img className="bigElipse" src={smallElipse} alt="" />
            <div className="poducts-bestseller">
            <Swiper
       slidesPerView={2}
       spaceBetween={30}
       freeMode={true}
       breakpoints={{
        968: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }}
       modules={[FreeMode]}
        className="mySwiper2"
      >
  {data.map((item, index) => (
        <SwiperSlide className="slide-bestseller" key={index}>
          <div className="card-bestseller">
            <img src={item.img} alt={item.title} />

            <div className="mobile__category">
            <div className="category__title">
            <p>{item.category}</p>
            </div>

            <p className="likes__mobile"> <Checkbox className="image-like" icon={<FavoriteBorder sx={{ color: '#EA899A' }} />} checkedIcon={<Favorite sx={{ color: '#EA899A' }} />} /> {item.likes}</p>
            </div>
            <div className="title__like-container">
            <h3>{item.title}</h3> <p> <Checkbox className="image-like" icon={<FavoriteBorder sx={{ color: '#EA899A' }}/>} checkedIcon={<Favorite  sx={{ color: '#EA899A' }}/>} /> {item.likes}</p>
            </div>
            <p className="matherial__title">Материал: {item.material}</p>
           <div className="block__price">
           <p>{item.price} р.</p>
           <Button className="price__button" variant="contained" >Подробнее</Button>
           </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="dop__block"></SwiperSlide>
      </Swiper>
            </div>
            <img className="smallElipse" src={bigElipse} alt="" />
            </div>

            </section>

            <section className="main__form-section">
                <div className="main__form-text">
                    <h2>Оставьте контакты, и мы с вами свяжемся</h2>
                    <p>Пожалуйста, введите ваши данные в поля для заполнения</p>
                </div>
                <div className="main__form-formBlock">
                <h2 className="min__form-dopTitle">Оставьте контакты, и мы <br/> с вами свяжемся</h2>
                    <img src={telega} alt="sand" />
                    <div className="main__form-inputGroup">
                        <TextField className="main__form-input" 
                        id="outlined-basic"
                            label="Имя"
                            variant="outlined"
                            color='#EA899A'
                             />
                            
                        <TextField
                            id="outlined-basic"
                            label="Телефон"
                            type="number"
                            className="main__form-input"
                            color='#EA899A'
                        />
                    </div>
                    <div className="main__form-buttonGroup">
                        <div className="main__form-chekboks">
                            <FormControlLabel control={<Checkbox defaultChecked
                             sx={{
                                '&.Mui-checked': {
                                    color: '#EA899A',
                                },
                              
                            }} 
                            />} label={
                                <div className="label-chekbox">Я согласен на обработку <span style={{ fontWeight: 'bold', color: '#EA899A' }}>персональных данных</span></div>
                            }
                            />
                        </div>
                        <Button className="main_form-button" variant="contained">Отправить</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main