import React from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import Sidebar from "./components/sidebar.js";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers.js";
import AddCustomer from "./pages/AddCustomers.js";
import FeedbackPage from "./pages/FeedbackPage.js";
import OrderPage from "./pages/OrderPage";

import Gallery from "./extraapps/gallery/index";

import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function App() {
  const sidebarState = useSelector((state) => {
    return state.sidebar.value;
  });
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div
            className="page-container"
            style={{
              width: sidebarState.isOpened
                ? "calc(100% - 16rem)"
                : "calc(100% - 6rem)",
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/addcustomer" element={<AddCustomer />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/orderpage" element={<OrderPage />} />
              {/* <Route path="/orderpage/order/:id" element={<OrderDetail />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Navbar from './components/navbar.js';
// import Sidebar from './components/sidebar.js';

// function App() {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Sidebar/>
//     </div>

//   )
// }

// export default App;
