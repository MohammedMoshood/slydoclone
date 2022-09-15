import styled from "styled-components";
export const ChatboxContainer = styled.div`
  width: 93%;
  transition: all 0.15s ease-in-out;
  display: flex;
  margin: 0 auto;
  border-radius: 3px;
  background: white;
  position: relative;
  border: 1px #beb4d9 solid;
  height: auto;
  min-height: 20%;
  transform: translateY(8%);
  @media screen and (min-width:1000px) {
  width: 96%;
  height: 95%;
  transform: translateY(3%);

 }

`;

export const ChatNav = styled.nav`
  display: none;
 @media screen and (min-width:1000px) {
    display: flex;
  width: 300px;
  min-height: 100%;
  position: relative;
  justify-content: center;
  padding: 30px;
  border-right: 1px solid #beb4d9;
 }
`;

export const ChatMenuDiv = styled.div`
  width: 90%;
  height: 200px;
  display: grid;
  padding: 5px;
  max-height: 600px;
  /* background-color : pink ; */
`;
export const ChatMenubtn = styled.button`
 width: 100%;
 height: 35px;
 font-size: 16px;
 background: white;
 display: flex;
 align-items: center;
 padding: 10px;
 margin: 0 auto;
 border-radius: 5px; border:none ;
 color: #2e2e2e;
 &:hover{
    border: 1px #a8b1bf solid;
    background:  #dce7fa;
 }
`
export const ChatMenuP = styled.p`
    margin-left: 20px;
    letter-spacing: 1px;
    font-size: 14px;
`

// export const ChatsWrap = styled.div`
//   width: 100%;
//   margin:0px 0px auto auto;
//   height: 200px;
//   /* display: flex; */
//   /* position: relative; */
//   background: red;
//   @media screen and (min-width:1000px) {
//   width: 80%;
//   margin: 0 auto;
//  }
// `;
export const Chats = styled.div`
  display: grid;
    /* position: relative; */
  background: white;
  width: 80%;
  min-height: 50%;
  max-height: 95%;
  padding:10px;
  height: auto;
  align-items: center;
  margin: auto;
  border-radius: 3px;
  box-shadow: 1px 1px 10px 1px #ebeced;
  padding: 10px;
  @media screen and (min-width:1000px) {
  min-height: 18%;
  width: 50%;
  margin: 80px auto auto; 
  }
`;
export const TopBarDiv = styled.div`
  height: 70px;
  width: 97%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width:1000px) {
    height: 80px;
  }
`;
export const Search = styled.input`
  width: 30%;
  border: 1px solid #beb4d9;
  height: 45%;
  border-radius: 3px;
  display: flex;
  padding-left: 10px;
  @media screen and (min-width:1540px) {
  width: 15%;
  display: flex;
  padding-left: 10px;

 }
`;
export const SelectDiv = styled.div`
  width: 150px;
  height: 45%;
  font-size: small;
  justify-content: right;
  align-items: center;
  display: flex;
  @media screen and (min-width:1540px) {
  width: 200px;
 }
`;
export const Select = styled.select`
  width: 70px;
  height: 95%;
  border-radius: 3px;
  border: 1px solid #beb4d9;
  margin-left: 10px;
`;
export const ChatSpace = styled.div`
  width: 97%;
  min-height: 50px;
  height: auto;
  display: grid;
  border: #beb4d9 1px solid;
  /* padding: 10px; */
  margin-left: auto;
  color: grey;
  letter-spacing: 0.5px;
  border-radius: 3px;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;
