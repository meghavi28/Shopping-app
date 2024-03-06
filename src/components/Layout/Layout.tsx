import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Badge, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

interface Props {
  children: any;
}

const CustomLayout: React.FC<Props> = ({ children }) => {
  const cart = useSelector((state: any) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#001529",
          color: "#fff",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div>
          <Button type="link" onClick={onLogout} style={{ color: "#fff" }}>
            <LogoutOutlined /> Logout
          </Button>
          <Link to={"/cart"}>
            <Badge count={cart.length}>
              <ShoppingCartOutlined
                style={{ fontSize: "24px", color: "#fff" }}
              />
            </Badge>
          </Link>
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>{children}</Content>
    </Layout>
  );
};

export default CustomLayout;
