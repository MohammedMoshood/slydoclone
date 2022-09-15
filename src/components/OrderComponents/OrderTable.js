import React, { useState , useEffect } from "react";
import Orders from "../../pages/Services/Orders";
import axios from "axios"
import { Ordertable, Tabledata, Tablehead , Tablerow} from "../../styles/OrderElements";

const OrderTable = () => {
  const [orders , setOrders] = useState([])

  useEffect(()=> {
    getOrders();
  })

  const getOrders = () => {
    axios.get("").then(result=>{
      result.json().then((resp)=>{
        setOrders(resp)
      }).catch(err=>{
        console.log(err)
      })
    })
  }

  return (
    <>



      <Ordertable>
        <Tablehead>
          <Tabledata>Order Number</Tabledata>
          <Tabledata>Customer</Tabledata>
          <Tabledata>Date & Time</Tabledata>
          <Tabledata>Price</Tabledata>
          <Tabledata>Status</Tabledata>
          <Tabledata>Paid</Tabledata>
          <Tabledata>Action</Tabledata>
         </Tablehead>

       
          {
            orders.map((order,index)=>
            <Tablerow key={index}>
              <Tabledata>{order.id}</Tabledata>
              <Tabledata>{order.customer}</Tabledata>
              <Tabledata>{order.date}</Tabledata>
              <Tabledata>{order.price}</Tabledata>
              <Tabledata>{order.status}</Tabledata>
              <Tabledata>{order.paid}</Tabledata>
              <Tabledata>{order.action}</Tabledata>
            </Tablerow>
            )
          }
      </Ordertable>
    </>
  );
};

export default OrderTable;
