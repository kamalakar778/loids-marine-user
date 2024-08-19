import React, { useState } from "react";

const Sample = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    country: "",
    // uploadedFiles: {
      image: null,
    // }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({ ...preData, [name]: value }));
  };
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: files[0]
      // uploadedFiles: { ...prevData.uploadedFiles, [name]: files[0] }
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("state", formData.state);
    data.append("country", formData.country);
    data.append("image", formData.image); // Append file
    // console.log("Response from backend:", formData);

    try {
      const response = await fetch("http://localhost:4000/sample/upload", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json"
        // },
        body: data
        // body: JSON.stringify(data)
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
      }
      const result = await response.json();
      
        console.log("Upload successful:", result);
        alert("Upload successful!");
      }
    catch (error) {
      console.error("Error:", error);
      alert("Error uploading file:"+ error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="text-center">
        <label>firstName</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        ></input>
        <br />
        <label>lastName</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        ></input>
        <br />
        <label>email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <br />
        <label>phoneNumber</label>
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        ></input>
        <br />
        <label>state</label>
        <input
          name="state"
          value={formData.state}
          onChange={handleChange}
        ></input>
        <br />
        <label>country</label>
        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
        ></input>
        <br />
        <label>image</label>
        <input 
        type="file"
        name="image"
        accept="image/*"
        onChange={handleFileChange}
        required
        ></input>
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Sample;
