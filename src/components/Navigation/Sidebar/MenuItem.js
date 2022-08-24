import React, { useState } from "react";
import {
  DropdownLink,
  SideBarLink,
  SideIcon,
  SideText,
  SubSidebarText
} from "../../../styles/SidebarElements";
import styled from "styled-components"



const MenuItem = ({ item, isHovering , toggle }) => {
  

  const [subSidebar, setSubSidebar] = useState(false);
  const showSubSidebar = () => setSubSidebar(!subSidebar);
  
  const ArrowStyle = styled.div`
    margin-left: 10px;
    transform: translateX(80px) translateY(8px);

    @media screen and (min-width: 921px) {
      transform: translateX(80px);
      margin-left: 20px;
      visibility: hidden;
    }
    
  `;
  return (
    <>

      <SideBarLink isHovering={isHovering} to={item.path} onClick={item.subSidebar && showSubSidebar}>
        <div onClick={toggle && !item.subSidebar} style={{ transition:"400ms" , width: "50%" , height:"100%" ,display:"flex"}}>
          <SideIcon isHovering={isHovering} >{item.icon}</SideIcon>
          <SideText isHovering={isHovering}>{item.title}</SideText>
        </div>
        <ArrowStyle isHovering={isHovering} >
          {item.subSidebar && subSidebar
            ? item.iconOpened
            : item.subSidebar
            ? item.iconClosed
            : null}
        </ArrowStyle>
      </SideBarLink>

      {subSidebar &&
        item.subSidebar.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SubSidebarText>{item.title}</SubSidebarText>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default MenuItem;
