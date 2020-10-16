import React, { useState } from "react";

const Order = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("description", info.description);
    formData.append("service", info.service);

    fetch("http://localhost:5000/addOrder", {
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
    alert("Place Order Added Successfully");
  };

  return (
    <div className="order-container" >
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleBlur}
          name="name"
          type="text"
          className="form-control  "
          placeholder="Your Name:"
        />

        <br />

        <input
          onBlur={handleBlur}
          name="email"
          type="text"
          className="form-control "
          placeholder="Your Email:"
        />

        <br />
        <input
          onBlur={handleBlur}
          name="service"
          type="text"
          className="form-control "
          placeholder="Graphic Design"
        />
        <br />

        <textarea
          onBlur={handleBlur}
          name="description"
          type="text"
          className="form-control "
          placeholder="Project Detail"
        />
        <br />

        <br />
        <div className="row">
          <div className="col-md-5">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Price"
            />
          </div>

          <div className="col-md-5">
            <input
              onChange={handleFileChange}
              type="file"
              id="myFile"
              name="filename"
            />
          </div>
        </div>
        <br />
        <button
        className="btn px-4"
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
  );
};

export default Order;
