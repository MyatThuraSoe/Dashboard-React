import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/ordercard.css";

const OrderCard = ({ order }) => {
  const { orderID, name, totalCost, orderStatus, waitingTime } = order;
  const navigate = useNavigate();

  const [waitTime, setWaitingTime] = useState(waitingTime);

  const getStatusColor = () => {
    switch (orderStatus) {
      case "delivered":
        return "green";
      case "pending":
        return "orange";
      case "in progress":
        return "red";
      default:
        return "green";
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setWaitingTime((prevTime) => prevTime + 1);
    }, 60000); // Increase waiting time every minute (60000 milliseconds)

    return () => {
      clearInterval(timer); // Clean up the interval when the component is unmounted
    };
  }, []);
  const handleDetailsClick = () => {
    navigate(`/orderpage/order/${orderID}`);
  };

  return (
    <div className="order-card">
      <div className="order-details">
        <div className="first-row">
          <div className="order-name">{name}</div>
          <div className="order-total-amount">${totalCost}</div>
          <div className="order-status" style={{ color: getStatusColor() }}>
            {orderStatus}
          </div>
        </div>
        <div className="second-row">
          <div className="first-column">
            <div className="order-id">Order ID: {orderID}</div>
            <div className="order-waiting-time">
              Waiting Time: {waitTime} mins
            </div>
          </div>
          <div className="order-actions">
            <button className="details-button" onClick={handleDetailsClick}>
              Details
            </button>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
