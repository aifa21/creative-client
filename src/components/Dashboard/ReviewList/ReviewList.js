import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
const ReviewList = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("title", info.title);
    formData.append("designation", info.designation);
    formData.append("description", info.description);

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Review Added Successfully");
  };
  return (
    <div className=" row">
      <div className="col-md-2 col-sm-6 col-12">
        <SideBar></SideBar>
      </div>
      <div className="col-md-8 col-lg-6">
        <h5 className="text-brand">Add Services</h5>
        <div className="order-container" >
          <form onSubmit={handleSubmit}>
            <input
              onBlur={handleBlur}
              name="title"
              type="text"
              className="form-control  "
              placeholder="Your Name:"
            />

            <br />

            <input
              onBlur={handleBlur}
              name="designation"
              type="text"
              className="form-control "
              placeholder="Company's Name / Designation:"
            />
            <br />
            <textarea
              onBlur={handleBlur}
              name="description"
              type="text"
              className="form-control "
              placeholder="Description"
            />
            <br />

            <br />

            <button
              style={{
                width: "100px",
                height: "48px",
                color: "white",
                backgroundColor: "black",
              }}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
