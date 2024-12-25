// import * as React from 'react';
import React, { useState } from 'react';
import "./drawer.css"
import "./drawer-mobile.css"
import "./drawer-tablet.css"
import "./menuButton/menuButton.css"
import "./menuButton/menuButton-tablet.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import find  from '../image/find.svg';
import naviIcon  from './footer/icon-footer/placeVector.svg'
import phoneFooter  from './footer/icon-footer/phoneFooter.svg'
import VK  from './footer/icon-footer/VK.svg'
import INSTA from './footer/icon-footer/instaFooter.svg'
import {
  NavLink,
} from "react-router-dom";


export default function AnchorTemporaryDrawer() {
  const [isOpenBurger, setIsOpenBurger] = useState()
 
  function MenuButton ({state, onClick}){
    return(
        <button onClick={onClick} className={`header__menu-button
          ${state === true ? "activeBurger": ""}
          ${state === false ? "unactiveBurger" : ""}
          `}>
          <span></span>
        </button>
    )
}
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    // Если меню открыто, закрываем его
    if (isOpenBurger) {
      setIsOpenBurger(false);
      setState({ ...state, [anchor]: false });
    } else {
      // Если меню закрыто, открываем его
      setIsOpenBurger(true);
      setState({ ...state, [anchor]: true });
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>

        <ListItem disablePadding className='list__item-burger'>
          <form className='burger-form' onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder='Введите название' />
            <button><img src={find} alt="" /></button>
          </form>
        </ListItem>

        <ListItem disablePadding>
          <div className="nav__burger-group">
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

          <NavLink
            to={"/aa"}
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


          </div>
        </ListItem>
       
       
       
        <ListItem disablePadding>
            <div className="burger__group-container">
          <div className="group__burger">
            <p className='group__burger-title'><b>Мы находимся :</b></p>
            <div><img src={naviIcon} alt="" />
              <p>г. Санкт-Петербург</p>
            </div>
          </div>
        
          <div className="group__burger">
            <p className='group__burger-title'><b>Наши контакты :</b></p>
            <div className='group__burger-phone-group'><img src={phoneFooter} alt="" />
              <p>+7 (921) 4074212</p>
            </div>
          </div>
       
          <div className="group__burger">
            <p className='group__burger-title'><b>Мы в соц. сетях :</b></p>
            <div className='group__burger-social-icons'>
              <img src={VK} alt="" />
              <img src={INSTA} alt="" />
            </div>
          </div>

          </div>
        </ListItem>
      </List>
      <Divider />

    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuButton state={isOpenBurger} onClick={toggleDrawer(anchor, true)}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
