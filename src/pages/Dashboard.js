import React from "react";
import WidgetPending from "../components/widgetPending.js";
import WidgetSaleAmount from "../components/widgetSaleAmount.js";
import WidgetVisitView from "../components/widgetVisitView.js";
import WidgetPosters from "../components/widgetPosters.js";
import TrendingMenu from "../components/trendingmenu.js";
import Topcustomers from "../components/topcustomers.js";
import BurgerBackground from "../assets/img/burger-background.png";
import "../style/dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <h3>Glory Taste Dashboard</h3>
      <div className="dashboard-widgets">
        <WidgetPending />
        <WidgetSaleAmount />
        <WidgetVisitView />
        {/* <WidgetPosters /> */}
        <TrendingMenu />
        <Topcustomers />
      </div>
      <img
        src={BurgerBackground}
        alt="burger background"
        className="burgerBackground"
      />
    </div>
  );
}
export default Dashboard;
