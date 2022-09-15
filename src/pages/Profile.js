import React , {useState} from 'react'
import Navbar from "../components/Navigation/Navbar/Navbar";
import Sidebar from "../components/Navigation/Sidebar/Sidebar";
import { useNavContext } from '../contexts/NavContext';
import { MainDiv } from "../styles/SidebarElements";

const Profile = () => {
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
    </MainDiv>
  )
}

export default Profile