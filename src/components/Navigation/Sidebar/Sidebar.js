import React from "react";
import { SideBarData } from "./SidebarData";
import MenuItem from "./MenuItem";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SideBarWrapper,
  Slydo,
  NavigationText,
  SideOverlay , 
  OverallSide , SlydoText

} from "../../../styles/SidebarElements";
import { FaAllergies as SlydoIcon } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle , isHovering , toggleHoverTrue , toggleHoverFalse }) => {
  return (
    <OverallSide isHovering={isHovering}  onMouseEnter={toggleHoverTrue}  onMouseLeave={!isOpen ? toggleHoverFalse : null} isOpen={isOpen}>
 
    
      <SidebarContainer isHovering={isHovering} isOpen={isOpen} >
      <Slydo>
            <SlydoIcon />
            <SlydoText isHovering={isHovering} > Slydo</SlydoText>
          </Slydo>
        <SideBarWrapper  isHovering={isHovering}>
          
          <Icon  isHovering={isHovering} >
            <CloseIcon  onClick={toggle} />
          </Icon>
          <br/>
          <br/>
          <NavigationText  isHovering={isHovering}>NAVIGATION</NavigationText>
          {SideBarData.map((item, index) => {
            return <MenuItem isHovering={isHovering} toggle={toggle} item={item} key={index} />;
          })}
        </SideBarWrapper  >
      </SidebarContainer>
     <SideOverlay onClick={toggle}>

     </SideOverlay>

    </OverallSide>
  );
};

export default Sidebar;
