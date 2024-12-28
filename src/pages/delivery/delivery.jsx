import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormDialogModal from "../../components/main-dialog/main-modal.js";
import Button from '@mui/material/Button';
import "./delivery-desktop.css";
import "./delivery-laptop.css";
import "./delivery-tablet.css";
import "./delivery-mobile.css";
import map from "./delivery-image/map.webp"
import track from "./delivery-image/track.svg"
import place from "./delivery-image/place.svg"

import track2 from "./delivery-image/track2.svg"
import sunduk from "./delivery-image/sunduk.svg"
import velik from "./delivery-image/velosiped.svg"
import iconReturn from "./delivery-image/icon-return.svg"

import telegramm from "../../image/icons8-телеграм.svg";
import VKontakte from '../../components/footer/icon-footer/VK.svg';
import closeModal from "../../components/main-dialog/closeImg.svg";
import telegramModal from "../../pages/main/image-main/telega.svg";

import VK2 from '../../components/footer/icon-footer/VK.svg'
import INSTA2 from '../../components/footer/icon-footer/instaFooter.svg'

export default function DeliveryPage() {

  const [open, setOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <main className="delivery__main">
      <section className="delivery__section__title">
        <h2>Доставка</h2>
      </section>
      <section className="delivery__container">
        <div className="delivery__map__container delivery__map__container__display__none">
          <Link to={"https://yandex.ru/maps/?ll=30.707417%2C60.065009&mode=poi&poi%5Bpoint%5D=30.707517%2C60.065584&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D23285806855&z=17.26"} target='_blank'>  <img src={map} alt="наша геопозиция" /></Link>
          <p className="delivery__info__text">
            Нажмите на изображение, чтобы пролоржить маршрут
          </p>
        </div>

        <div className="delivery__info__container">
          <div className="delivery__info__container__tablet">
            <div>
              <p className="delivery__info__title">Мы находимся :</p>
              <p className="delivery__info__text">
                <img src={place} alt="точка" /> Пос. РОМАНОВКА, местечко углово 13
              </p>
            </div>

            <div>
              <p className="delivery__info__title">Как до нас добраться :</p>
              <p className="delivery__info__text delivery__info__text_width">
                Наше производство находится в Ленингрaдcкoй области,Всеволожского
                района. До нас можно добраться только на автомобиле,так как
                общественный транспорт не ходит. . В навигаторе вы можете указать
                адрес: Пос. РОМАНОВКА, местечко углово 13 (Только именно
                "Местечко" углово,так как дальше есть ещё просто "углово") Или
                указать в навигаторе: "МЕБЕЛЬНОЕ ПРОИЗВОДСТВО КАЛИНИНЫ ДЕЛАЮТ ".
                Приехав на место вы увидите здание из профлиста и зелёную вывеску
                "МЕБЕЛЬ". Добравшись до места нужно позвонить по телефону:
                89214074212 89214074202 89817445332 И вас встретят. Так же
                убедительная просьба-Не гулять по территории производства,так как
                есть охрана🐶🐶🐶
              </p>
            </div>
          </div>

          <div className="delivery__map__container__tablet">
            <Link to={"https://yandex.ru/maps/?ll=30.707417%2C60.065009&mode=poi&poi%5Bpoint%5D=30.707517%2C60.065584&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D23285806855&z=17.26"} target='_blank'> <img src={map} alt="наша геопозиция" /></Link>
            <p className="delivery__info__text">
              Нажмите на изображение, чтобы пролоржить маршрут
            </p>
          </div>

          <div className='delivery__info__block_conditions'>
            <p className="delivery__info__title delivery__title__align">Мы доставляем :</p>
            <div className="delivery__info_conditions_container">
              <div>
                <p className="delivery__info__title">
                  <img src={track} alt="" /> Санкт-Петербург{" "}
                </p>
                <p className="delivery__info__text">
                  (Доставка по городу и ЛО)
                </p>
              </div>
              <div>
                <p className="delivery__info__title delivery__info_title__mobile__align">
                  <img src={track} alt="" />
                  Регионы по России
                </p>
                <p className="delivery__info__text">
                  (Отправка деловыми линиями )
                </p>
              </div>
            </div>

            <div className="delivery__info__method__container">
              <p className="delivery__info__title delivery__title__align">Выберите способ доставки :</p>
              <div className="delivery__info__method__select">

                <div className={`track__select ${selectedMethod === 'selfPickup' ? 'track__select_border' : ''}`}
                  onClick={() => handleSelect('selfPickup')}
                >
                  <img src={track2} alt="" />
                  <div>
                    <p
                      className={`delivery__info__title delivery__info__title_size ${selectedMethod === 'selfPickup' ? 'delivery__info__title_size_opasity' : ''}`}
                      onClick={() => handleSelect('selfPickup')}
                    > Самовывоз
                    </p>
                    <p
                      className={`align__text ${selectedMethod === 'selfPickup' ? 'delivery__info__title_size_opasity' : ''}`}
                      onClick={() => handleSelect('selfPickup')}
                    >(1 день)</p>
                  </div>
                </div>

                <div className={`track__select ${selectedMethod === 'courier' ? 'track__select_border' : ''}`}
                  onClick={() => handleSelect('courier')}
                >
                  <img src={velik} alt="" />
                  <div>
                    <p className={`delivery__info__title delivery__info__title_size ${selectedMethod === 'courier' ? 'delivery__info__title_size_opasity' : ''}`}
                      onClick={() => handleSelect('courier')}
                    > Курьером
                    </p>
                    <p
                      className={`align__text ${selectedMethod === 'courier' ? 'delivery__info__title_size_opasity' : ''}`}
                      onClick={() => handleSelect('courier')}
                    >(1-3 дня)</p>
                  </div>
                </div>

                <div className={`track__select ${selectedMethod === 'delovye' ? 'track__select_border' : ''}`}
                  onClick={() => handleSelect('delovye')}
                >
                  <img src={sunduk} alt="" />
                  <div>
                    <p className={`delivery__info__title delivery__info__title_size ${selectedMethod === 'delovye' ? 'delivery__info__title_size_opasity' : ''}`}
                      onClick={() => handleSelect('delovye')}
                    > Деловыми линиями
                    </p>
                    <p
                      className={`align__text ${selectedMethod === 'delovye' ? 'delivery__info__title_size_opasity' : ''}`}
                      onClick={() => handleSelect('delovye')}
                    >(В замисимости от вашего города)</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>



      <section className="delivery__dopInfo__container">
        <div className='delivery__dopInfo__container__section'>

          <p className='returnToCatalog'>Вернуться в каталог <img src={iconReturn} alt="" /></p>




          <div className='delivery__group__container__social'>
            <Button className="main-btn-contact del__but__margin" variant="contained" onClick={() => setOpen(true)}>Связаться</Button>

            <div className="group-footer">
              <p className='footer-title delivery__footer-title'><strong>Мы в соц. сетях :</strong></p>
              <div className='social-icons delivery__social__icons__align'>
                <img src={VK2} alt="" />
                <img src={INSTA2} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////// */}
        <FormDialogModal active={open} setActive={setOpen}>
          <div className="modal__form">
            <div className="modal__form__header">
              <img src={closeModal} alt="close" onClick={() => setOpen(false)} />
            </div>
            <p className="modal__form__title">
              Оставьте <span style={{ fontWeight: 'bold', color: '#EA899A' }}>свои данные</span>,<br className="space2" /> и мы с вами свяжемся
            </p>
            <div className="modal__form__main">
              <img src={telegramModal} alt="" />
              <form >
                <input className="modal__form__input" type="text" placeholder="Введите имя" />
                <input className="modal__form__input" type="tel" placeholder="Введите телефон" />
                <Button className="modal__form__button" variant="contained">Отправить</Button>
              </form>
            </div>
            <div className="modal__social__connection">
              <h3>А так же вы можете написать нам в соц. сети</h3>
              <div className="modal__social__icon__container">
                <div>
                  <Link to={"https://vk.com/kalininy_delayut"} target="_blank">
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
      </section>
    </main>
  );
}