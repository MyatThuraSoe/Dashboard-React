import React from 'react';
import "../style/widgetPosters.css";
import BurgerPoster from '../assets/img/burgerPoster.jpg';
import BurgerPoster2 from '../assets/img/burgerposter2.png'
import BurgerPoster3 from '../assets/img/burger-poster.jpg';
import { FaDollarSign } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';
import { TbChartLine } from 'react-icons/tb';
import { useSelector } from "react-redux";

export default function WidgetPosters(){
  const sidebarState = useSelector((state) => {
    return state.sidebar.value;
  });

  return (
    <div className='widget-posters' >
      <div className='top-poster' style={ { width: sidebarState.isOpened ? '100%' : '50%' }}>
        <img src={ BurgerPoster } />
      </div>
      <div className='bottom-poster' style={ sidebarState.isOpened ? { width: '0%', display: 'none' } : { width:'50%', display: 'inline', transition: 'all 1s'} }>
        <img src={ BurgerPoster3 } />
      </div>
             
    </div>
  )
}
