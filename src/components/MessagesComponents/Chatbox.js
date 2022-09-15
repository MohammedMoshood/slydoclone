import React, { useState } from "react";
import { PageContainer } from "../../styles/StaticHomeElements";
import { ChatMenuData } from "./ChatMenuData";
import {
  ChatboxContainer,
  ChatNav,
  Chats,
  TopBarDiv,
  Search,
  SelectDiv,
  Select,
  ChatSpace,
  ChatMenuDiv,
  ChatMenubtn,
  ChatMenuP,
} from "../../styles/ChatboxElements";
const Chatbox = () => {
  const [loading, setLoading] = useState(true);
  const [currentselected, setCurrentSelected] = useState({ value: "10" });

  const handleChange = (e) => {
    setCurrentSelected({ value: e.target.value });
  };
  return (
    <PageContainer>
      <ChatboxContainer>
        <ChatNav>
          <ChatMenuDiv>
            {ChatMenuData.map((menuitem, index) => {
              return (
                <ChatMenubtn key={index}>
                  {menuitem.icon}
                  <ChatMenuP>{menuitem.title}</ChatMenuP>
                </ChatMenubtn>
              );
            })}
          </ChatMenuDiv>
        </ChatNav>
      
          <Chats>
            <TopBarDiv>
              <Search placeholder="Search by name"></Search>
              <SelectDiv>
                <p>Show</p>
                <Select onChange={handleChange}>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </Select>
              </SelectDiv>
            </TopBarDiv>
            <ChatSpace>
              {loading ? (<>
                <p>There are no records found</p>
                </>
              ) : (
                <p>2 records found</p>
              )}
            </ChatSpace>
          </Chats>
      </ChatboxContainer>
    </PageContainer>
  );
};

export default Chatbox;
