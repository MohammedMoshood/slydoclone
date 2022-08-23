import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  font-size: 1rem;
  top: 0;
  margin-right: 0 auto;
  justify-content: center;
  align-items: center;
  border-bottom: lightgrey 1px solid;
  position: relative;
  top: 0;
  z-index: 1;
  box-shadow: 0px 0px 8px grey;
  @media screen and (min-width: 921px) {
    transition: 0.2s all ease;
  }
`;
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  width: 100%;
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

  @media screen and (min-width: 921px) {
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
background-color: red;


`;

export const ProfileImage = styled.img`
object-fit: contain;
width: 100%;
height: 100%;
border-radius: 50px;
`
