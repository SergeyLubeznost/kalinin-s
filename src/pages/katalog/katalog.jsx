import { useState } from "react";
import "./katalog-desktop.css";
import "./katalog-laptop.css";
import "./katalog-tablet.css";
import "./katalog-mobile.css";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BlockSort from "./block-sort/block-sort";

import strelkaSelect from "./image-katalog/strelkaSelect.svg";

import data from "../main/data";


export default function Katalog (){

    const CustomIcon = ({ open }) => (
        <img
          src={strelkaSelect}
          alt="стрелка"
          style={{
            width: '1rem',
            height: '1rem',
            marginRight:"15px",
            transition: 'transform 0.3s',  // Добавляем анимацию
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)' // Поворачиваем стрелку
          }}
        />
      );
      const [openSelect, setOpenSelect] = useState(false);
    const [age, setAge] = useState("популярные");

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        <main className="main__catalog">
            <div className="katalog__container__sort">
            <h2>Каталог товаров</h2>
            <div className="select__container">
                <p>Cортировка :</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120,boxShadow: 'none', outline:'none', border: 'none', background: 'transparent' }}>
        <Select
        sx={{  color: '#EA899A' }}
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
            </div>
            
            <BlockSort arr={data} />
        </main>
    )
}