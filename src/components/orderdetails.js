import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { orderlist } from "../assets/data/orderlist";
import CustomerPhoto from "../assets/img/chris.jpg";
import "../style/orderdetails.css";

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const getOrderDetails = () => {
      const order = orderlist.find((order) => order.orderID === parseInt(id));
      if (order) {
        setOrderDetails(order);
      } else {
        console.error("Order not found");
      }
    };

    getOrderDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate("/orderpage");
  };
  const formatDateTime = (dateTime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    };

    return new Date(dateTime).toLocaleString(undefined, options);
  };

  if (!orderDetails) {
    return <div>Loading order details...</div>;
  }

  return (
    <div className="orderdetails">
      <div className="top-div">
        <button onClick={handleGoBack}>Go back to Order Page</button>
        <h2>
          Order Details by Order ID: <span>{orderDetails.orderID}</span>
        </h2>
      </div>
      <div className="first-card">
        <div className="image-container">
          <img src={CustomerPhoto} alt="customer" />
        </div>
        <div className="card-text">
          <span>Name: {orderDetails.name}</span>
        </div>
      </div>
      {/* <div className="totalcost">Total Cost: {orderDetails.totalCost}</div> */}
      <div className="second-card">
        <div>Order Status: {orderDetails.orderStatus}</div>
        <div>Order Time: {formatDateTime(orderDetails.ordertime)}</div>
        <div>Complete Time: {formatDateTime(orderDetails.completetime)}</div>
      </div>
      <div className="contact-details">
        <div className="email">Email: {orderDetails.email}</div>
        <div className="address">Address: {orderDetails.address}</div>
        <div className="phone">Phone: {orderDetails.phone}</div>
      </div>
      <div className="item-container">
        {orderDetails.cart.map((item) => (
          <div key={item.id} className="item">
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
