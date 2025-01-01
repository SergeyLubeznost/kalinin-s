import { useState } from 'react';
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

import strelkaSelect from "../image-katalog/strelkaSelect.svg";

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

export default function BlockSort({ arr, newArr }) {



    const minPrice = Math.min(...arr.map(item => item.priceNumber));
    const maxPrice = Math.max(...arr.map(item => item.priceNumber));

    const exclusiveData = arr.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.category === item.category
        ))
    );
    const exclusiveLength = arr.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.length === item.length
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
    const [openSelect, setOpenSelect] = useState(false);

    return (
        <div className="sort__container">
            <h4 className='categoty__title'>Продукт</h4>
            {
                exclusiveData.map((item) => (
                    <FormControlLabel
                        className="category__side"
                        key={item.id} 
                        control={<Checkbox defaultChecked
                            sx={{
                                '&.Mui-checked': {
                                    color: '#EA899A'
                                },

                            }} />}
                        label={item.category}
                    />
                ))
            }
         
            <Accordion style={{ boxShadow: 'none', border: 'none', background: 'transparent', width: '100%' }}>
                <AccordionSummary
                    expandIcon={<CustomIcon open={openSelect} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className='accordion__padding'
                >
                    <Typography className='categoty__title' component="span">Цена</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion__padding__content'>
                    <div className="input__group">
                        <input type="number" placeholder={"от " + minPrice} />
                        <input type="number" placeholder={"до " + maxPrice} />
                    </div>
                    <Slider
                        className='slider__category'
                        defaultValue={maxPrice}
                        min={minPrice}
                        max={maxPrice} // Устанавливаем максимальное значение для слайдера
                        aria-label="Default"
                        valueLabelDisplay="auto"

                    />
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ boxShadow: 'none', outline: 'none', border: 'none', background: 'transparent', borderColor: 'white', width: '100%' }}>
                <AccordionSummary
                    expandIcon={<CustomIcon open={openSelect} />}
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
                                control={<Checkbox defaultChecked
                                    sx={{
                                        '&.Mui-checked': {
                                            color: '#EA899A',
                                        },

                                    }} />}
                                label={item.length}
                            />
                        ))
                    }
                </AccordionDetails>
            </Accordion>

            <div className="block__sort__radio__container">
                <p className='categoty__title '>Наличие рамок у зеркал</p>
                <FormControlLabel control={<PinkSwitch defaultChecked />} label="" />
            </div>

        </div>
    )
}