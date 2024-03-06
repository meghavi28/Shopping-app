import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetailPage from "./pages/ProductDetail";
import CartPage from "./components/Cart/Cart";
import {Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = (props: { children: React.ReactNode }): JSX.Element => {
  const loggedInUser = useSelector((state:any)=>state.loggedInUser)
  const { children } = props

  return loggedInUser ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/login"
      // state={{ from: `${location.pathname}${location.search}` }}
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
