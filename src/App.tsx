import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect as Redirect,
  redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetailPage from "./pages/ProductDetail";
import CartPage from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

const App: React.FC = () => {
  const loggedInUser = useSelector((state: any) => state.loggedInUser);
  const dispatch = useDispatch();
  return (
    <div>
      {loggedInUser === null ? (
        <></>
      ) : (
        <Button
          onClick={() => {
            dispatch({
              type: "LOGOUT",
            });
            redirect('/login')
          }}
        >
          LogOut
        </Button>
      )}
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
