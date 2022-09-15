import React, { useState } from "react";
import { useNavContext } from "../contexts/NavContext";
import Welcome from "../components/DashboardComponents/Welcome";
import Navbar from "../components/Navigation/Navbar/Navbar";
import Sidebar from "../components/Navigation/Sidebar/Sidebar";
import { MainDiv } from "../styles/SidebarElements";

const Dashboard = () => {
  const { isOpen } = useNavContext();


  return (
    <MainDiv isOpen={isOpen}>
      <Navbar/>
      <Sidebar/>
      <Welcome/>
    </MainDiv>
  );
};

export default Dashboard;
