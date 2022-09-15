import React  from 'react'
import Chatbox from '../components/MessagesComponents/Chatbox';
import Navbar from "../components/Navigation/Navbar/Navbar";
import Sidebar from "../components/Navigation/Sidebar/Sidebar";
import { useNavContext } from '../contexts/NavContext';
import { MainDiv } from "../styles/SidebarElements";

const Messages = () => {

    const {isOpen} = useNavContext();

  return (
     <MainDiv isOpen={isOpen}>
      <Navbar/>
      <Sidebar/>
      <Chatbox/>
    </MainDiv>
  )
}

export default Messages