import React from 'react';
import "./footer.css"
import "./footer-mobile.css"
import "./footer-tablet.css"
import "./footer-laptop.css"
import logo  from '../../image/Group 59.svg'
import naviIcon  from './icon-footer/placeVector.svg'
import phoneFooter  from './icon-footer/phoneFooter.svg'
import VK  from './icon-footer/VK.svg'
import INSTA from './icon-footer/instaFooter.svg'


function Footer() {
    return (
        <footer>
            <img className='logo-footer' src={logo} alt="Логотип" />

            <p className='footer-info'>© 2021 Любое использование либо копирование материалов или подборки материалов сайта,
                элементов дизайна и оформления допускается лишь с разрешения правообладателя
                и только со ссылкой на источник: <span>https://калининыделают.рф/</span>.</p>

            <div className="group-footer">
                <p className='footer-title'><strong>Мы находимся :</strong></p>
                <div><img src={naviIcon} alt="" />
                    <p>г. Санкт-Петербург</p>
                </div>
            </div>
            <div className="group-footer">
                <p className='footer-title'><strong>Наши контакты :</strong></p>
                <div><img src={phoneFooter} alt="" />
                    <p>+7 (921) 4074212</p>
                </div>
            </div>
            <div className="group-footer">
                <p className='footer-title'><strong>Мы в соц. сетях :</strong></p>
                <div className='social-icons'>
                    <img src={VK} alt="" />
                    <img src={INSTA} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;