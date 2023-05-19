import React, { useState } from "react";
import Customericon from "../assets/img/customericon.jpg";
// import axios from "axios";
import "../style/addcustomer.css";

function AddCustomer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the server
    // axios
    //   .post("/api/contact", formData)
    //   .then((response) => {
    //     // Handle success
    //     console.log("Data sent successfully:", response.data);
    //     // Reset the form
    //     setFormData({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       address: "",
    //     });
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.error("Error sending data:", error);
    //   });
  };

  return (
    <div className="addcustomer">
      <div className="customericon-container">
        <img src={Customericon} alt="customericon" />
      </div>
      <div className="contact-form">
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
