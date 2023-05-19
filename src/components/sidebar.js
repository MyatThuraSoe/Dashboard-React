import React from "react";
import "../style/sidebar.css";
import { Link } from "react-router-dom";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { MdGroupAdd } from "react-icons/md";

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
            <MdDashboard />
          </div>
          <span>Dashboard</span>
        </div>
      </Link>
      <Link to="/customers">
        <div
          className="sidebar-item"
          id={sidebarState.selectedpage == "/customers" ? "active" : ""}
          onClick={() => dispatch(changePathname("/customers"))}
        >
          <div className="sidebar-item-icon">
            <FaUser />
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
            <RiGalleryFill />
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
            <MdGroupAdd />
          </div>
          <span>Feedback</span>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
