import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetailPage from "./pages/ProductDetail";
import CartPage from "./components/Cart/Cart";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route
            path="/product-details/:productId"
            Component={ProductDetailPage}
          />
          <Route path="/cart" Component={CartPage} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
