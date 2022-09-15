import React from "react";
import {BsArrowDownUp} from "react-icons/bs"
import { Search, TopBarDiv } from "../../styles/ChatboxElements";
import { Ordercard  , Filterdiv , Filterselect , Pageselect} from "../../styles/OrderElements";
import { PageContainer } from "../../styles/StaticHomeElements";
import { TextWrap, WelcomeText } from "../../styles/WelcomeElements";
import OrderTable from "./OrderTable"
const Ordertab = () => {
  return (
    <PageContainer>
      <TextWrap>
        <WelcomeText>Orders</WelcomeText>
      </TextWrap>
      <Ordercard>
        <TopBarDiv>
        <Search placeholder="Search by name" type="text"></Search>
        <Filterdiv>
            <Filterselect >
                <option >Filter by Status</option>
                <option>pepper</option>
            </Filterselect>
            <Pageselect>
            <option >Show Page Count</option>
            </Pageselect>
        </Filterdiv>
        </TopBarDiv>
        <OrderTable/>
      </Ordercard>
    </PageContainer>
  );
};

export default Ordertab;
