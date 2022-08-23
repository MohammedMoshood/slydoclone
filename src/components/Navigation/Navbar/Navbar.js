import React from "react";
import { FaBars } from "react-icons/fa";
import picture from "../../../images/profilepic.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  MenuIcon,
  Nav,
  NavigationContainer,
  NavProfilebtn,
  Profilename,
  ProfileIcon,
  ProfileImage,
 
} from "../../../styles/NavbarElements";

const Navbar = ({ isOpen , toggle }) => {
  return (
    <>
      <Nav>
        <NavigationContainer>
          <MenuIcon isOpen={isOpen}>
            <FaBars  onClick={toggle} />
          </MenuIcon>
          <NavProfilebtn>
            <ProfileIcon>
              <ProfileImage src={picture} alt={"pic"} />
            </ProfileIcon>
            <Profilename>{`Tamara entertains`}</Profilename>
            <MdKeyboardArrowDown />
          </NavProfilebtn>
        </NavigationContainer>
      </Nav>
    </>
  );
};

export default Navbar;
