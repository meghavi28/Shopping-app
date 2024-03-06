import React from "react";
import HomeComponent from "../components/Home/HomeComponent";
import CustomLayout from "../components/Layout/Layout";

const Home: React.FC = () => {
  return (
    <CustomLayout>
      <HomeComponent />
    </CustomLayout>
  );
};

export default Home;
