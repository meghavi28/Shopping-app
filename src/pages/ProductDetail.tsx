import React from "react";
import ProductDetail from "../components/ProductDetails/ProductDetails";
import CustomLayout from "../components/Layout/Layout";

const ProductDetailPage: React.FC = () => {
  return (
    <CustomLayout>
      <ProductDetail />
    </CustomLayout>
  );
};

export default ProductDetailPage;
