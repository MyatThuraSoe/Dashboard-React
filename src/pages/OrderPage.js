import React from "react";
import OrderCard from "../components/ordercard";
import { orderlist } from "../assets/data/orderlist";
import "../style/orderpage.css";

const OrderPage = () => {
  return (
    <div className="orderpage">
      <h1>OrderPage</h1>
      <div className="order-list">
        {orderlist.map((order) => (
          <OrderCard key={order.orderID} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
