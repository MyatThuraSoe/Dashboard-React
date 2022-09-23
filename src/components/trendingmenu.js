import React, { useEffect } from 'react';
import { useState } from "react";
import { itemList } from '../assets/data/trendingmenulist.js';
import '../style/trendingmenu.css';


function Trendingmenu() {
  const [ itemArray,setItemArray ] = useState(itemList);
  const [selectedColumn, setSelectedColumn] = useState('weekly');
  
  
  
  function setDailyTrend(){
    let items = [...itemList];
    let ischanged = true;
    while(ischanged === true){
      ischanged = false;
      for(let i=0; i < items.length - 1; i++){
        if (items[i].daily < items[i+1].daily){
          let item = items[i];
          items[i] = items[i+1];
          items[i+1] = item;
          ischanged = true;
        }
      }
    }
    setItemArray(items);
  }
 

  function setWeeklyTrend(){
    let items = [...itemList];
    let ischanged = true;
    while(ischanged === true){
      ischanged = false;
      for(let i=0; i < items.length - 1; i++){
        if (items[i].weekly < items[i+1].weekly){
          let item = items[i];
          items[i] = items[i+1];
          items[i+1] = item;
          ischanged = true;
        }
      }
    }
    setItemArray(items);
  }
  useEffect(()=>{
    setWeeklyTrend();
  },[]);
  
  return (
    <div className="trending-menu">
      <h3>Trending menu for this week</h3>
      <table>
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col className={ selectedColumn == 'daily' ? 'highlightcolumn de-cols' : 'de-cols' }/>
          <col className={ selectedColumn == 'weekly' ? 'highlightcolumn de-cols' : 'de-cols' }/>
        </colgroup>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th style={{ cursor: 'pointer' }} onClick={()=>{
                setDailyTrend();
                setSelectedColumn('daily');
              }
            } >Today</th>
            <th style={{ cursor: 'pointer' }} onClick={()=>{
              setWeeklyTrend();
              setSelectedColumn('weekly');
            }}>This Week</th>
          </tr>
        </thead>
        <tbody>
        {
          itemArray.map((item, index) => {
            return(
              <tr key={item.id}>
                <td>{ index + 1 }</td>
                <td>{ item.name }</td>
                <td>{ item.price } $</td>
                <td>{ item.daily }</td>
                <td>{ item.weekly }</td>
              </tr>
              
            )
            
          })

        }
        </tbody>
      </table>
    </div>
  );
}
export default Trendingmenu;