import styled from "styled-components";

export const Nav = styled.nav`
  min-width:100% ;
  height: 70px;
  margin-top: -70px;
  display: flex;
  margin-left:auto;
  margin-right: auto;
  top: 0;
  background: white;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  border-bottom: lightgrey 1px solid;
  position: sticky ;
  z-index: 10;
  box-shadow: 0px 0px 4px #beb4d9;
  @media screen and (min-width: 1540px) {
    transition: 0.2s all ease;
  
  }
`;
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  align-items: center;
  padding: 0px 24px;
  /* max-width: 1920px; */
 
`;
export const MenuIcon = styled.div`
  align-items: center;
  width: 24px;
  color: #808080;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  height: 24px;
  padding-bottom: 30px;

  @media screen and (min-width:1200px) {
    visibility: hidden;
  }

  &:hover {
    transition: 0.2s all ease-in-out;
    color: #5c3cfa;
  }
`;

export  const NavProfilebtn = styled.div`
font-size: 24px;
letter-spacing: 1px;
word-spacing: 2px;
display: flex;
justify-content: space-between;
align-items: center;
justify-self: flex-end;
width: 240px;

`

export const Profilename = styled.h6`
font-weight: 100;

`;
export const ProfileIcon = styled.div`
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50px;


`;

export const ProfileImage = styled.img`
object-fit: contain;
width: 100%;
height: 100%;
border-radius: 50px;
`
