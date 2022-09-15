import React , {useState} from 'react'
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import Ordertab from '../../components/OrderComponents/Ordertab';
import { useNavContext } from '../../contexts/NavContext';
import { MainDiv } from "../../styles/SidebarElements";


const Orders = () => {
  const { isHovering , isOpen , toggle , toggleHoverTrue , toggleHoverFalse} = useNavContext();
  return (
     <MainDiv isOpen={isOpen}>
      <Navbar isOpen={isOpen} toggle={toggle}></Navbar>
      <Sidebar
        isOpen={isOpen}
        isHovering={isHovering}
        toggleHoverTrue={toggleHoverTrue}
        toggleHoverFalse={toggleHoverFalse}
        toggle={toggle}
      ></Sidebar>
      <Ordertab/>
    </MainDiv>
  )
}

export default Orders