import React, { useState } from 'react';
import "../style/widgetVisitView.css";
import LineChart from './linechart.js';
import { BsClipboardData } from 'react-icons/bs';


export default function WidgetVisitView(){
    const [trafficData, setTrafficData] = useState({
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
            label: "Total Traffic",
            data: [40, 53, 85, 41, 44, 65, 80],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
            },
            {
            label: "Order Traffic",
            data: [33, 40, 55, 33, 24, 56, 63],
            fill: false,
            borderColor: "#742774"
            }
        ],
    });
    const chartOptions = {
        responsive: true, 
        maintainAspectRatio: true,
        plugins:{
        legend: {
            display: true,
            position: 'top',
            labels:{
            // pointStyle: 'circle',
            usePointStyle: true,
            }
        
        }
        }
        
    };
  return (
    <div className='widget-visit-view'>
        <div className='wvv-top'>
            <div className='wvv-icon'><BsClipboardData/></div>
            <div className='wvv-title'>Website Visits</div>
        </div>
        <div className='wvv-bottom'>
          <div className='line-chart'>
            <LineChart chartData={trafficData} chartOptions={ chartOptions }/>
          </div>
        </div>
    </div>
  )
}
