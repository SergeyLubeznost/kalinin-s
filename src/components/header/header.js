import React from 'react';
import logo  from '../../image/Group 59.svg'
import find  from '../../image/find.svg'
import phone  from '../../image/phone.svg'
import user from '../../image/user.svg'
import favorite  from '../../image/favorite.svg'
import basket  from '../../image/Vector (1).svg'
import AnchorTemporaryDrawer from '../drawer';
import './header-tablet.css';
import './header-mobile.css';
import './header-laptop.css'
import './header.css';

import {
   NavLink,
} from "react-router-dom";

function Header (){
    return(
        <header>
            <AnchorTemporaryDrawer/>
            <img className='logo' src={logo} alt="Логотип" />
          
                <ul>
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/katalog"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Каталог
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/about"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            О нас
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/delivery"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Доставка
                        </NavLink>
                    </li>
                   
                </ul>

                <form onClick={(e) => e.stopPropagation()} >
                    <input type="text" placeholder='Введите название' onClick={(e) => e.stopPropagation()}  />
                    <button><img src={find} alt="" /></button>
                </form>

                <div className="phone-group">
                    <img src={phone} alt="" />
                    <p>+7 (921) 4074212</p>
                </div>

                <div className="icon-group">
                <img src={user} alt="" />
                <img src={favorite} alt="" />
                <img src={basket} alt="" />
                </div>
          
        </header>
    );
}

export default Header;