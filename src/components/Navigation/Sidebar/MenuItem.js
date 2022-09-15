import React, { useState } from "react";
import {
  DropdownLink,
  SideBarLink,
  SideIcon,
  SideText,
  SubSidebarText , 
  ArrowStyle
} from "../../../styles/SidebarElements";


const MenuItem = ({ item, isHovering , toggle }) => {
  

  const [showSubSidebar, setShowSubSidebar] = useState(false);
  const toggleSubSidebar = () => setShowSubSidebar(!showSubSidebar);
  
 
  return (
    <>

      <SideBarLink isHovering={isHovering} to={item.path} onClick={item.subSidebar && toggleSubSidebar}>
        <div onClick={!item.subSidebar && toggle} style={{ transition:"400ms" , width: "50%" , height:"100%" ,display:"flex"}}>
          <SideIcon isHovering={isHovering} >{item.icon}</SideIcon>
          <SideText isHovering={isHovering}>{item.title}</SideText>
        </div>
        <ArrowStyle isHovering={isHovering} >
          {item.subSidebar && showSubSidebar
            ? item.iconOpened
            : item.subSidebar
            ? item.iconClosed
            : null}
        </ArrowStyle>
      </SideBarLink>

      {showSubSidebar && isHovering &&
        item.subSidebar.map((item, index) => {
          return (
            <DropdownLink onClick={toggle} to={item.path} key={index}>
              <SubSidebarText>{item.title}</SubSidebarText>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default MenuItem;
