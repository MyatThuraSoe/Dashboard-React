import React, { useState } from 'react';
import '../style/widgetPending.css';
import { FaCartArrowDown } from 'react-icons/fa';
import DonutChart from './donut.js';

function WidgetPending() {
  const [pendingOrder, setpendingOrder] = useState({
    labels: [ 'Complete', 'Pending' ],
    datasets: [
      {
        label: "Pending Orders",
        data: [60, 22],
        backgroundColor: [
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const chartOptions = {
    responsive: true, 
    maintainAspectRatio: true,
    plugins:{
      legend: {
        display: true,
        position: 'right',
        labels:{
           pointStyle: 'circle',
          usePointStyle: true,
        }
       
      }
    }
    
  };

  return (
    <div className='widget-pending'>
        <div className='widget-pending-top'>
            <div className='widget-pending-icon'><FaCartArrowDown/></div>
            <div className='widget-pending-title'>Pending Orders</div>
        </div>
        <div className='widget-pending-bottom'>
          <div className='donut-chart'>
            <DonutChart chartData={pendingOrder} chartOptions={ chartOptions }/>
          </div>
          <div className='widget-total-pending'>
            <span>22</span> left
          </div>
        </div>
        
        
    </div>
  )
}

export default WidgetPending;