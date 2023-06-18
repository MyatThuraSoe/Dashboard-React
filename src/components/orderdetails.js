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
  function calculateTotalAmount() {
    let total = 0;

    // Iterate through each item in the cart and calculate the subtotal
    orderDetails.cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    // Return the total amount formatted as a currency
    return formatCurrency(total);
  }

  function formatCurrency(amount) {
    // Add currency formatting logic here based on your requirements
    // For example, you can use toFixed() method to round the amount to 2 decimal places
    return "$" + amount.toFixed(2);
  }

  if (!orderDetails) {
    return <div>Loading order details...</div>;
  }

  return (
    <div className="orderdetails">
      <div className="top-div">
        <button onClick={handleGoBack}> &lt;&lt; Go back to Order Page</button>
        <h2>
          Order Details by Order ID: <span>{orderDetails.orderID}</span>
        </h2>
      </div>
      <div className="first-card">
        <div className="image-container">
          <img src={CustomerPhoto} alt="customer" />
        </div>
        <div className="card-text">
          <span>{orderDetails.name}</span>
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
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
            <tr class="total-row">
              <td>Total Amount:</td>
              <td colspan="2">{calculateTotalAmount()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
