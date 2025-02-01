import { useState } from "react";
import "./katalog-desktop.css";
import "./katalog-laptop.css";
import "./katalog-tablet.css";
import "./katalog-mobile.css";

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BlockSort from "./block-sort/block-sort";

import strelkaSelect from "./image-katalog/strelkaSelect.svg";
import preloaderShowMore from "./image-katalog/PreloaderShowMore.svg";
import iconFilter from "./image-katalog/icon_filter.svg"

import FormDialogModal from "../../components/main-dialog/main-modal.js";

import data from "../main/data";


export default function Katalog() {
  const [newArr, setNewArr] = useState(data);
  const [itemsToShow, setItemsToShow] = useState(6); // Начальное количество карточек
  const [isLoading, setIsLoading] = useState(false); // Состояние для анимации
  const [open, setOpen] = useState(false); // состояние модального окна



  const handleShowMore = () => {
    setIsLoading(true); // Запускаем анимацию
    setTimeout(() => {
      setItemsToShow(prevItemsToShow => prevItemsToShow + 6);
      setIsLoading(false); // Останавливаем анимацию
    }, 1000);
  };

  const CustomIcon = ({ open }) => (
    <img
      src={strelkaSelect}
      alt="стрелка"
      style={{
        width: '1rem',
        height: '1rem',
        marginRight: "15px",
        transition: 'transform 0.3s',  // Добавляем анимацию
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)' // Поворачиваем стрелку
      }}
    />
  );
  const [openSelect, setOpenSelect] = useState(false);

  const [age, setAge] = useState("популярные");

  const handleChange = (event) => {
    setAge(event.target.value);
    let sortedArr = [...newArr]; // Создаем копию массива

    switch (event.target.value) { // Используем значение из select напрямую
      case "популярные":
        sortedArr.sort((a, b) => b.likes - a.likes); // Сортировка по лайкам по убыванию
        break;
      case "по убыванию":
        sortedArr.sort((a, b) => b.priceNumber - a.priceNumber); // Сортировка по цене по убыванию
        break;
      case "по возрастанию":
        sortedArr.sort((a, b) => a.priceNumber - b.priceNumber); // Сортировка по цене по возрастанию
        break;
      default:
        break;
    }

    setNewArr(sortedArr); // Обновляем состояние массива
  };


  return (
    <main className="main__catalog">
      <div className="katalog__container__sort">
        <h2>Каталог товаров</h2>
        <div className="select__container">
          <p>Cортировка :</p>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120, boxShadow: 'none', outline: 'none', border: 'none', background: 'transparent' }}>
            <Select
              sx={{ color: '#EA899A' }}
              value={age}

              onChange={handleChange}
              onOpen={() => setOpenSelect(true)} // Устанавливаем состояние при открытии
              onClose={() => setOpenSelect(false)} // Устанавливаем состояние при закрытии
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              IconComponent={() => <CustomIcon open={openSelect} />

              }
            >

              <MenuItem value={"популярные"}>популярные</MenuItem>
              <MenuItem value={"по убыванию"}>по убыванию</MenuItem>
              <MenuItem value={"по возрастанию"}>по возрастанию</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          className="button__show__filter"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          <img src={iconFilter} alt="iconFilter" />
        </Button>

        <FormDialogModal active={open} setActive={setOpen}>

          <BlockSort arr={data} newArr={newArr} setNewArr={setNewArr} setOpenModal={setOpen}/>
        </FormDialogModal>
      </div>
      <div className="sort__card__container">
        <div className="block__sort__component">
          <BlockSort arr={data} newArr={newArr} setNewArr={setNewArr} />
        </div>

        <div className="card__container">

          {newArr.slice(0, itemsToShow).map(item => {
            return (
              <div key={item.id} className="card-bestseller catalog__kard">
                <img src={item.img} alt={item.title} />

                <div className="mobile__category catalog__category">
                  <div className="category__title catalog__title">
                    <p>{item.category}</p>
                  </div>

                  <p className="likes__mobile"> <Checkbox className="image-like" icon={<FavoriteBorder sx={{ color: '#EA899A' }} />} checkedIcon={<Favorite sx={{ color: '#EA899A' }} />} /> {item.likes}</p>
                </div>
                <div className="title__like-container catalog__like__container">
                  <h3>{item.title}</h3> <p> <Checkbox className="image-like" icon={<FavoriteBorder sx={{ color: '#EA899A' }} />} checkedIcon={<Favorite sx={{ color: '#EA899A' }} />} /> {item.likes}</p>
                </div>
                <p className="matherial__title catalog__matherial__title">Материал: {item.material}</p>
                <div className="block__price catalog__block__price">
                  <p>{item.price} р.</p>
                  <Button className="price__button catalog__price__button" variant="contained" >Купить</Button>
                </div>
              </div>)
          })}
          <div className="button__show__more__container">
            {itemsToShow < newArr.length && (
              <Button
                className="button__show__more"
                variant="contained"
                onClick={handleShowMore}
              >
                Показать еще  <img className={isLoading ? "rotating-image" : ''} src={preloaderShowMore} alt="" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}