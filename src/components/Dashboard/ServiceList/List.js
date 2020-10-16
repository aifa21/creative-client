import React, { useContext } from "react";
import { UserContext } from "../../../App";

const List = (props) => {
  const { order } = props;

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      {loggedInUser.email == order.email && (
        <div className="row">
          <div
            className="card  ml-5 mt-5 mb-4 col-sm-10 col-md-5  d-flex align-items-center"
            style={{
              margin: "10px 10px",
              border: "1px solid white",
              borderRadius: "10px",
              background: "white",
            }}
            key={order._id}
          >
            <div>
              <div className="card-body">
                <h5 className="card-title">
                  <strong>{order.service}</strong>
                </h5>
                <p className="card-text">{order.description}</p>
                <button
                  style={{
                    backgroundColor: "#ffcccc",
                    color: " #ff1a1a",
                    border: "none",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
