import React from 'react';
import '../style/navbar.css';
import { IoNotificationsCircleSharp } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdMessage,MdPendingActions } from 'react-icons/md';

import { FaSearch } from 'react-icons/fa';
import Burgerlogo from '../assets/img/burgerlogo.png';
import Myat from '../assets/img/myat.jpg';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeSidebarState } from "../redux/state.js";

function Navbar() {
  const dispatch = useDispatch();
  const sidebarState = useSelector((state) => {
    return state.sidebar.value;
  });
  
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <div className='webname' style={{ width: sidebarState.isOpened ? '15rem' : '5rem', transition: 'all 0.5s'}}><img src={ Burgerlogo } alt='glory tasate logo'/><span style={{ display: sidebarState.isOpened ? 'inline' : 'none' }}>Glory Taste</span></div>
        <AiOutlineMenu className='nav-menu-icon' onClick={()=> { dispatch(changeSidebarState({ selectedpage: sidebarState.selectedpage, isOpened: !sidebarState.isOpened })) }}/>
        <div className='search-box'>
          <input id="searchbar" className='searchbar' type="text" name="search" placeholder="Search ..."/>
          <div className='search-icon-button'><FaSearch className='search-icon'/></div>
        </div>
      </div>
      <div className='nav-right'>
          <div className='nav-pending'>
            <MdPendingActions className='nav-pending-icon'/>
            <span className='pending-number'>11</span>
          </div>
          <div className='nav-msg'>
            <MdMessage className='nav-msg-icon'/>
            <span className='msg-number'>12</span>
          </div>
          <div className='nav-noti'>
            <IoNotificationsCircleSharp className='nav-noti-icon'/>
            <span className='noti-number'>10</span>
          </div>
          <div className='nav-admin'>
            <div className='admin-name'>Admin</div>
            <div className='admin-pic'><img src={ Myat } alt='Admin Myat Thura Soe'/></div>
          </div>
      </div>
    </div>

  )
}


export default Navbar;