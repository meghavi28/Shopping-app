import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spin } from "antd";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Spin size="large" />;
  }

  if (!product) {
    return <div>No product found!</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <div style={{ display: "flex" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ marginTop: "20px", width: 300, height: 300 }}
        />
        <div style={{ marginLeft: "20px" }}>
          <h1>{product.title}</h1>
          <div>
            <h5>ID:</h5>
            {product.id}
          </div>
          <div>
            <h5>Price:</h5>
            {product.price}
          </div>
          <div>
            <h5>Category:</h5>
            {product.category}
          </div>
          <div>
            <h5>Description</h5>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
