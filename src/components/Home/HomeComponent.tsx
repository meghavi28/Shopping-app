import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Pagination,Select,Badge } from "antd";
import ProductCard from "./ProductCard";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const { Option } = Select;

const ProductList: React.FC = () => {
  const cart = useSelector((state:any) => state.cart);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalProductsCount, setTotalProductCount] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3300/totalProductCount`
        );
        setTotalProductCount(response.data as any);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:3300/categories`);
        setCategories(response.data as any);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3300/products?limit=${10}&offset=${
            (currentPage - 1) * 10
          }&category=${selectedCategory}`
        );
        setProducts(response.data as any);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            height: "70px",
            // border: "1px solid #ccc",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        >
          <h1>Product List</h1>
        </div>
          <Link to={"/cart"}>
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            cursor: "pointer",
          }}
        >
          <Badge count={cart.length ?? 0}>
            <ShoppingCartOutlined
              style={{ fontSize: "35px", color: "#1890ff" }}
            />
          </Badge>
        </div>
        </Link>
      </div>
      <div style={{display:"flex", justifyContent:"flex-end", marginBottom:"20px"}}>
      <Select
        defaultValue={selectedCategory}
        style={{ width: 200 }}
        onChange={handleCategoryChange}
      >
        <Option value="">All Categories</Option>
        {categories.map((category: string) => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </Select>
      </div>
      <Row gutter={[16, 16]}>
        {products.map((product: any) => (
          <Col key={product.id} xs={24} sm={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        total={products.length < 10 ? 1 : totalProductsCount}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
