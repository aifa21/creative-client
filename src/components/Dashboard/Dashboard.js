import React, { useEffect, useContext } from "react";
import { UserContext } from "../../App";
import Orders from "../Dashboard/Orders/Orders";
import Sidebar from "../Dashboard/SideBar/SideBar";
import { useParams } from "react-router-dom";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { name } = useParams();

  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div
          className="col-md-8 col-lg-6 p-4 pr-5"
          style={{ backgroundColor: "#F4FDFB" }}
        >
          <h4>Orders</h4>
          <Orders></Orders>
        </div>
        <div className="col-md-2">
          <p>{loggedInUser.name}</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
