import React, { useState } from "react";
import Welcome from "../components/DashboardComponents/Welcome";
import Navbar from "../components/Navigation/Navbar/Navbar";
import Sidebar from "../components/Navigation/Sidebar/Sidebar";
import {MainDiv} from "../styles/SidebarElements"

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isHovering , setIsHovering] = useState(false)

  const toggleHoverTrue = ()=> {
    setIsHovering(true)
  }
  const toggleHoverFalse = ()=> {
    setIsHovering(false)
  }
  return (
    <>
    <MainDiv isOpen={isOpen}>
    
      
      <Navbar isOpen={isOpen}  toggle={toggle}></Navbar>
      <Sidebar isOpen={isOpen} isHovering={isHovering} toggleHoverTrue={toggleHoverTrue} toggleHoverFalse={toggleHoverFalse} toggle={toggle}></Sidebar>
      <Welcome></Welcome>
      </MainDiv>

     
      </>
   
  );
};

export default Dashboard;
