import * as React from 'react';
import "./block-sort-desktop.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



export default function BlockSort() {
    return (
        <div className="sort__container">
            <FormControlLabel control={<Checkbox defaultChecked />} label="Гримёрные столы" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Зеркала" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Подвесные тумбы" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Комплекты" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Комплектующие для столов" />

            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Цена</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="input__group">
                        <input type="number" placeholder='от 5990' />
                        <input type="number" placeholder='до 50990' />
                    </div>
                    <Box sx={{ width: 300 }}>

                        <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" />
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Длина, см</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="60 см" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="70 см" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="80 см" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="90 см" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="100 см" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="110 см" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="120 см" />
                </AccordionDetails>
            </Accordion>

            <div className="block__sort__radio__container">
                <p className='block__sort__radio__title'>Наличие рамок у зеркал</p>
                <FormControlLabel control={<Switch defaultChecked />} label="" />
            </div>

        </div>
    )
}