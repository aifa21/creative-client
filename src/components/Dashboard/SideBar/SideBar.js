import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faLuggageCart,
  faSignOutAlt,
  faCommentAlt,
  faPlus,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";
const SideBar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/home" className="text-white">
            <img style={{ width: "100px" }} src={logo} />
          </Link>
        </li>

        <li>
          <Link to="/dashboard/order" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />{" "}
            <span>Order</span>
          </Link>
        </li>
        <li>
          <Link to="/servicelist" className="text-white">
            <FontAwesomeIcon icon={faLuggageCart} className="mr-2" />{" "}
            <span>Servicelist</span>
          </Link>
        </li>
        <li>
          <Link to="/reviewlist" className="text-white">
            <FontAwesomeIcon icon={faCommentAlt} className="mr-2" />{" "}
            <span>Review</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
