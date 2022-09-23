import React from 'react';
import "../style/widgetSaleAmount.css";
import { FaDollarSign } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';
import { TbChartLine } from 'react-icons/tb';

export default function WidgetSaleAmount(){
  return (
    <div className='widget-sale-amount'>
        <div className='wsa-top-row'>
            <div className='wsa-icon'><FaDollarSign/></div>
            <span className='wsa-title'>Total Sale amount</span>
        </div>       
        <div className='wsa-bottom-row'>
            <div className='wsa-today'><div className='wsa-text-container'><span className='wsa-amount'> 126</span> <span> $ Today </span> </div><div className='wsa-chart-container'><AiOutlineStock className='stock-icons up' /></div></div>
            <div className='wsa-this-week'><div className='wsa-text-container'><span className='wsa-amount'>885</span> <span> $ This week </span></div> <div className='wsa-chart-container'><TbChartLine className='stock-icons down'/></div></div>
        </div>        
    </div>
  )
}
