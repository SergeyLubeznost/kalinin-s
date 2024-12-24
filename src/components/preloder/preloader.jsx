import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import logo  from '../../image/Group 59.svg'
import "./preloader.css"

export default function Preloader (){
    return(
        <section className='section__prelodaer'>
  <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    <div className='preloader__container' >
        <img src={logo} alt="" />
      <CircularProgress className='preloader__container'  />
      </div>
    </Stack>
        </section>
    )
} 