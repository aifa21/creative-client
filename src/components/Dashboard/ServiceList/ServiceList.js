import React, { useEffect, useState } from "react";
import List from "./List";
import SideBar from "../SideBar/SideBar";
const ServiceList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://nameless-sands-87488.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div className="container-fluid row">
      <SideBar></SideBar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">All Orders</h5>
        {orders.map((order) => (
          <List order={order}></List>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
