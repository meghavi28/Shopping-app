import React from "react";
import { Card, Button, Rate } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const handleProduct = () => {
    dispatch({
      type: "ADDTOCART",
      payload: product,
    });
  };
  return (
    <Card
      hoverable
      style={{ width: "85%", minHeight: "560px", padding: "20px" }}
      cover={<img alt={product.title} src={product.image} height={230} />}
    >
      <Link to={`/product-details/${product.id}`}>
        <div style={{ marginBottom: "10px", height:200 }}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Rate disabled defaultValue={product.rating.rate} />
          <span style={{ marginLeft: "5px" }}>({product.rating.count})</span>
        </div>
      </Link>
      <Button
        type="primary"
        block
        style={{ marginTop: "10px" }}
        onClick={handleProduct}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
