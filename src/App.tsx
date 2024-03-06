import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetailPage from "./pages/ProductDetail";
import CartPage from "./components/Cart/Cart";
import {Navigate } from 'react-router-dom';

const PrivateRoute = (props: { children: React.ReactNode }): JSX.Element => {
  const loggedInUser = localStorage.getItem("Token")
  const { children } = props

  return loggedInUser ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/login"
    />
  )
}

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route
            path="/product-details/:productId"
            element={<PrivateRoute><ProductDetailPage /></PrivateRoute>}
          />
          <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
