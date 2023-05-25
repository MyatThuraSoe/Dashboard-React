import React from "react";
import "../style/sidebar.css";
import { Link } from "react-router-dom";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { TbCheckupList } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changePathname } from "../redux/state.js";

function Sidebar() {
  const dispatch = useDispatch();
  const sidebarState = useSelector((state) => {
    return state.sidebar.value;
  });
  const spans = document.querySelectorAll(".sidebar-item span");
  React.useEffect(() => {
    spans.forEach((span) => {
      span.style.display = sidebarState.isOpened ? "inline" : "none";
    });
  });
  return (
    <div
      className="sidebar"
      style={{
        width: sidebarState.isOpened ? "16rem" : "6rem",
        transition: "all 0.5s",
      }}
    >
      <Link to="/">
        <div
          className="sidebar-item"
          id={sidebarState.selectedpage == "/" ? "active" : ""}
          onClick={() => dispatch(changePathname("/"))}
        >
          <div className="sidebar-item-icon">
            <MdOutlineHome />
          </div>
          <span>Dashboard</span>
        </div>
      </Link>
      <Link to="/orderpage">
        <div
          className="sidebar-item"
          id={sidebarState.selectedpage == "/orderpage" ? "active" : ""}
          onClick={() => dispatch(changePathname("/orderpage"))}
        >
          <div className="sidebar-item-icon">
            <TbCheckupList />
          </div>
          <span>Current Orders</span>
        </div>
      </Link>
      <Link to="/customers">
        <div
          className="sidebar-item"
          id={sidebarState.selectedpage == "/customers" ? "active" : ""}
          onClick={() => dispatch(changePathname("/customers"))}
        >
          <div className="sidebar-item-icon">
            <BiUser />
          </div>
          <span>Top Customers</span>
        </div>
      </Link>
      <Link to="/gallery">
        <div
          className="sidebar-item"
          id={sidebarState.selectedpage == "/gallery" ? "active" : ""}
          onClick={() => dispatch(changePathname("/gallery"))}
        >
          <div className="sidebar-item-icon">
            <MdOutlinePhotoLibrary />
          </div>
          <span>Gallery</span>
        </div>
      </Link>
      <Link to="/addcustomer">
        <div
          className="sidebar-item"
          id={sidebarState.selectedpage == "/addcustomer" ? "active" : ""}
          onClick={() => dispatch(changePathname("/addcustomer"))}
        >
          <div className="sidebar-item-icon">
            <MdGroupAdd />
          </div>
          <span>Add Customer</span>
        </div>
      </Link>
      <Link to="/feedback">
        <div
          className="sidebar-item"
          id={sidebarState.selectedpage == "/feedback" ? "active" : ""}
          onClick={() => dispatch(changePathname("/feedback"))}
        >
          <div className="sidebar-item-icon">
            <VscFeedback />
          </div>
          <span>Feedback</span>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
