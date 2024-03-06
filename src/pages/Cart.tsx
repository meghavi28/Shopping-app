import React from "react";
import Cart from "../components/Cart/Cart";
import CustomLayout from "../components/Layout/Layout";

const CartPage: React.FC = () => {
  return (
    <CustomLayout>
      <Cart />
    </CustomLayout>
  );
};

export default CartPage;
