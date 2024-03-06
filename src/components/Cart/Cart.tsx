import React from "react";
import { List, Button } from "antd";
import { ShoppingCartOutlined,DownloadOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux'
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoiceDocument from './InvoiceDocument';
import CustomLayout from "../Layout/Layout";

const CartPage: React.FC = () => {
    const carts: any = useSelector((state: any)=> state.cart)

  const handleRemoveFromCart = (productId: number) => {};

  const calculateTotalAmount = () => {
    return carts.reduce((total:any, product:any) => total + product.price, 0);
  };

  return (
    <CustomLayout>
    <div style={{display:"flex", justifyContent:"center"}}>
    <div style={{ padding: "20px", width:"60%"}}>
      <h1>
        <ShoppingCartOutlined /> Cart
      </h1>
      <List
        dataSource={carts}
        renderItem={(product:any) => (
          <List.Item
            actions={[
              <Button
                type="link"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Remove
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={product.title}
              description={`$${product.price}`}
            />
          </List.Item>
        )}
      />
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <strong>Total Amount:</strong> ${calculateTotalAmount()}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <PDFDownloadLink document={<InvoiceDocument />} fileName="invoice.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading...' : <Button type="primary" size="large" icon={<DownloadOutlined />}>Download Invoice</Button>)}
        </PDFDownloadLink>
        </div>
      </div>
    </div>
    </div>
    </CustomLayout>
  );
};

export default CartPage;
