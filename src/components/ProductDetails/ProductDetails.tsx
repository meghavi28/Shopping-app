import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Descriptions, Spin } from "antd";

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
      <Descriptions title={product.title}>
        <Descriptions.Item label="ID">{product.id}</Descriptions.Item>
        <Descriptions.Item label="Price">${product.price}</Descriptions.Item>
        <Descriptions.Item label="Category">
          {product.category}
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {product.description}
        </Descriptions.Item>
      </Descriptions>
      <img
        src={product.image}
        alt={product.title}
        style={{ marginTop: "20px", maxWidth: "100%" }}
      />
    </div>
  );
};

export default ProductDetail;
