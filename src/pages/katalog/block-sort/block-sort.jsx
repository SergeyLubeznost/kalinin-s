import React, { useState, useEffect } from 'react';
import "./block-sort-desktop.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import FormDialogModal from "../../../components/main-dialog/main-modal.js";

import telegramModal from "../../main/image-main/telega.svg";
import VKontakte from '../../../components/footer/icon-footer/VK.svg';
import telegramm from "../../../image/icons8-телеграм.svg";

import strelkaSelect from "../image-katalog/strelkaSelect.svg";
import closeModal from "../../../components/main-dialog/closeImg.svg";

const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[50],
        '&:hover': {
            backgroundColor: alpha(pink[50], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],

    },
}));

export default function BlockSort({ arr, newArr, setNewArr, setOpenModal }) {

    const [selectedCategories, setSelectedCategories] = useState(arr.map(item => item.category));
    const [selectedSize, setSelectedSize] = useState(arr.map(item => item.size));
    const [selectedMirror, setSelectedMirror] = useState(false);

    const [openModalManager, setOpenModalManager] = useState(false);

    const handleCategoryChange = (event) => {
        const { checked, name } = event.target; // Получаем имя (категорию) и состояние чекбокса

        if (checked) {
            setSelectedCategories([...selectedCategories, name]); // Добавляем категорию в массив

        } else {
            setSelectedCategories(selectedCategories.filter(category => category !== name)); // Удаляем категорию из массива

        }

    };
    const handleSizeChange = (event) => {
        const { checked, name } = event.target; // Получаем имя (size) и состояние чекбокса

        if (checked) {
            setSelectedSize([...selectedSize, name]); // Добавляем категорию в массив

        } else {
            setSelectedSize(selectedSize.filter(size => size !== name)); // Удаляем категорию из массива

        }

    };







    const minPrice = Math.min(...arr.map(item => item.priceNumber));
    const maxPrice = Math.max(...arr.map(item => item.priceNumber));

    const [minPriceValue, setMinPriceValue] = useState(minPrice); // Состояние для минимальной цены
    const [maxPriceValue, setMaxPriceValue] = useState(maxPrice); // Состояние для максимальной цены


    const exclusiveData = arr.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.category === item.category
        ))
    );
    const exclusiveLength = arr.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.size === item.size
        ))
    );

    const CustomIcon = ({ open }) => (
        <img
            src={strelkaSelect}
            alt="стрелка"
            style={{
                width: '28px',
                height: '15px',

            }}
        />
    );

    useEffect(() => {
        const handleFilter = () => {

            const filteredArr = arr.filter(item => {
                return (
                    (selectedCategories.length === 0 || selectedCategories.includes(item.category))
                    && (selectedSize.length === 0 || selectedSize.includes(item.size))
                    && item.priceNumber >= minPriceValue
                    && item.priceNumber <= maxPriceValue
                    && (selectedMirror ? item.mirror : true)
                );
            });
            setNewArr(filteredArr);
        };
        handleFilter();
    }, [selectedCategories, selectedSize, minPriceValue, maxPriceValue, selectedMirror, arr, setNewArr]);


    return (
        <div className="sort__container">
            <div className='closeFilter__container'>
                <h4 className='categoty__title'>Продукт</h4>
                <img src={closeModal} alt="close" onClick={() => setOpenModal(false)} />
            </div>

            {
                exclusiveData.map((item) => (
                    <FormControlLabel
                        className="category__side"
                        key={item.id}
                        control={<Checkbox
                            checked={selectedCategories.includes(item.category)} // Состояние чекбокса
                            onChange={handleCategoryChange} // Обработчик события
                            name={item.category} // Устанавливаем имя для категорииz
                            sx={{
                                '&.Mui-checked': {
                                    color: '#EA899A'
                                },

                            }} />}
                        label={item.category}
                    />
                ))
            }

            <div className="button__container__manager">
                <Button
                    className="button__connect__manager"
                    variant="contained"
                    onClick={() => setOpenModalManager(true)}
                >
                    Мебель по индивидуальным размерам под заказ
                </Button>
            </div>




            <FormDialogModal active={openModalManager} setActive={setOpenModalManager}>
                <div className="modal__form">
                    <div className="modal__form__header">
                        <img src={closeModal} alt="close" onClick={() => setOpenModalManager(false)} />
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

            <Accordion style={{ boxShadow: 'none', border: 'none', background: 'transparent', width: '100%' }} >
                <AccordionSummary
                    expandIcon={<CustomIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className='accordion__padding'
                >
                    <Typography className='categoty__title' component="span">Цена</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion__padding__content'>
                    <div className="input__group">
                        <input type="number" placeholder={"от " + minPrice}
                            value={minPriceValue} // Связываем input с состоянием
                            onChange={(e) => setMinPriceValue(parseInt(e.target.value))} />
                        <input type="number" placeholder={"до " + maxPrice}
                            value={maxPriceValue} // Связываем input с состоянием
                            onChange={(e) => setMaxPriceValue(parseInt(e.target.value))} />
                    </div>
                    <Slider
                        className='slider__category'
                        defaultValue={maxPrice}
                        min={minPrice}
                        max={maxPrice}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        value={maxPriceValue} // Связываем слайдер с состоянием
                        onChange={(event, newValue) => setMaxPriceValue(newValue)} // Обработчик изменения слайдера
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ boxShadow: 'none', outline: 'none', border: 'none', background: 'transparent', borderColor: 'white', width: '100%' }}>
                <AccordionSummary
                    expandIcon={<CustomIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className='accordion__padding'
                >
                    <Typography className='categoty__title' component="span">Длина, см</Typography>
                </AccordionSummary>
                <AccordionDetails className='checkbox__length__container accordion__padding__content'>

                    {
                        exclusiveLength.map((item) => (
                            <FormControlLabel
                                className='checkbox__length'
                                key={item.id} // Не забудьте добавить уникальный ключ для каждой метки
                                control={<Checkbox
                                    checked={selectedSize.includes(item.size)} // Состояние чекбокса
                                    onChange={handleSizeChange} // Обработчик события
                                    name={item.size} // Устанавливаем имя для категорииz
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#EA899A',
                                        },

                                    }} />}
                                label={item.size}
                            />
                        ))
                    }
                </AccordionDetails>
            </Accordion>

            <div className="block__sort__radio__container">
                <p className='categoty__title '>Наличие рамок у зеркал</p>
                <FormControlLabel control={<PinkSwitch
                    checked={selectedMirror}
                    onChange={() => setSelectedMirror(!selectedMirror)}
                />} label="" />
            </div>

        </div>
    )
}