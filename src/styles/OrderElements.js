import styled from "styled-components";

export const Ordercard = styled.div`
  width: 93%;
  height: auto;
  border-radius: 5px;
  min-height: 15%;
  background-color: white;
  margin: 0 auto;
`;
export const Filterdiv = styled.div`
  width: 25%;
  height: 100%;
  /* background-color: red; */
  align-items: center;
  display: flex;
  /* padding: 20px; */
  justify-content: space-between;
`;

export const Filterselect = styled.select`
  width: 40%;
  height: 45%;
  margin-left: 60px;
  border: black 1px solid;
  border-radius: 5px;
  padding: 5px;
  font-size: 15px;
  font-weight: 100;
  color: #616161;
`;
export const Pageselect = styled.select`
  width: 40%;
  height: 45%;
  border: solid 1px blue;
  color: blue;
  font-weight: 100;
  border-radius: 5px;
  padding: 5px;
  font-size: 15px;
`;

//OrderTable

export const Ordertable = styled.table`
  border-collapse: collapse;
  width: 97%;
  margin: 0 auto;
  min-height: 30px;
  height: auto;
  display: flex;
`;
export const Tablehead = styled.th`
  font-size: small;
  border-collapse: collapse;
  display: flex;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #beb4d9; 
`;
export const Tabledata = styled.td`
  border-right: 1px solid #beb4d9;
  border-collapse: collapse;
  width: 100%;
  display: flex;
  justify-content: left;
  padding-left: 20px;
  align-items: center;
`;
export const Tablerow = styled.th`
  font-size: small;
  border-collapse: collapse;
  height: 30px;
  display: flex;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #beb4d9; 
`;
