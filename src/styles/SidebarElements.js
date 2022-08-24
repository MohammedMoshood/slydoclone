import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";







export const MainDiv = styled.main`
  padding-left: 0;

  @media screen and (min-width:1200px) {
    padding-left: ${({ isOpen }) => (isOpen ? "350px" : "70px")};
    transition: all ease-in-out 0.3s;
  }
`;


//Sidebar


export const SideOverlay = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  cursor: pointer;
  @media screen and (min-width:1200px) {
    display: none;
  }
`;


export const OverallSide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  position: fixed;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  @media screen and (min-width:1200px) {
      width: ${({isHovering})=>(isHovering ? "17%" : "4%")} ;
      opacity: 100%;
      transition: 0.3s  ;
      left: 0;
      z-index: 999;
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 40%;
  height: 100%;
  justify-content: center;
  background-color: #e3deff;
  display: grid;
  top: 0;
  z-index: 999;
  border-right: #beb4d9 solid 0.1rem;
  transition: 0.4s ease-in-out;

  @media screen and (min-width:1200px) {
    width: ${({ isHovering }) => (isHovering ? "350px" : "70px")};
    transition: 0.3s  ;
    left: 0;
  justify-content: center;

  }
`;
export const Slydo = styled.div`
  position: fixed;
  top: 0.7rem;
  font-size: 32px;
  color: #5c3cfa;
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media screen and (min-width:1200px) {
    
  }
`;

export const SlydoText = styled.h3`
margin-left: 10px;
@media screen and (min-width:1200px) {
  transition: 50ms ease-in-out all;
  visibility: ${({isHovering})=>(isHovering?"visible":"hidden")};
  }
`

export const NavigationText = styled.h5`
  letter-spacing: 4px;
  margin-left: 22px;
  @media screen and (min-width:1200px) {
    letter-spacing: 4px;
    margin-left: 15px;
    transition: 50ms ease-in-out all;
  visibility: ${({isHovering})=>(isHovering?"visible":"hidden")};
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  @media screen and (min-width:1200px) {
    transition: 50ms ease-in-out all;
  visibility: ${({isHovering})=>(isHovering?"visible":"hidden")};
  }
`;

export const CloseIcon = styled(FaBars)`
  color: #808080;

  &:hover {
    color: #5c3cfa;
    border-radius: 50px;
    background:rgba(0,0,0,0.1);
  }
`;

export const SideBarWrapper = styled.div`
  margin-top: 50px;
  height: 700px;
  width: 98%;
  display: grid;
  justify-self: center;
  align-items: flex-start;
  @media screen and (min-width:1200px) {
    width: ${({isHovering})=>(isHovering?"98%":"30%")};
    margin-right:${({isHovering})=>(isHovering ? "30px":"0")}
  }
`;

export const SideBarLink = styled(LinkRouter)`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  align-items: center;
  text-decoration: none;
  list-style: none;
  transition: 0.1s ease-in-out;
  color: #2e2e2e;
  margin-top: 15px;

  padding: 10px 10px 20px 20px;
  @media screen and (min-width:1200px) {
    display: flex;
    height: 50px;
    align-items: center;
    text-decoration: none;
    list-style: none;
    transition: 0.1s ease-in-out;
    color: #2e2e2e;
      width: ${({isHovering})=>(isHovering?"100%":"50px")};
     justify-self: ${({isHovering})=>(isHovering?"center":"")};
      padding: 10px 12px;
  }

  &:hover {
    background: white;
    border-radius: 5px;
    color: #5c3cfa;
    transition: all 0.1s ease-in-out;
    font-weight: 600;
  }
`;
export const SideIcon = styled.div`
  width: auto;
  font-weight: 500;
  font-size: 28px;
  justify-self: flex-start;
  justify-content: center;
  height: 100%;

`;

export const SideText = styled.p`
  font-weight: 600;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: left;
  margin-left: 20px;
  width: 80%;
  padding-top: 2px;
  @media screen and (min-width:1200px) {
  transition: 50ms ease-in-out all;
  visibility: ${({isHovering})=>(isHovering?"visible":"hidden")};
  }
`;

export const DropdownLink = styled(LinkRouter)`
  background-color: transparent;
  list-style: none;
  text-decoration: none;
  height: 40px;
  color: #2e2e2e;
  padding-left: 4.8rem;
  align-items: center;
  width: 100%;
  display: flex;
  list-style: none;
  &:hover {
    border-left: 5px solid #2e2e2e;
    background: #5c3cfa;
    color: white;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 5rem;
  }
`;
export const SubSidebarText = styled.span`
  font-weight: 400;
  font-size: 16px;
`;
