import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../ApplicationPage/ApplicationPage.css";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import logo from "../../assets/Sailors-Logo.png";

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    post: "",
    candidateName: "",
    dateOfBirth: "",
    mobileNumber: "",
    fatherName: "",
    gender: "",
    emailId: "",
    address: {
      houseNumber: "",
      policeStation: "",
      city: "",
      pincode: "",
      postOffice: "",
      district: "",
      state: ""
    },
    education: [
      {
        examPassed: "10th",
        schoolCollege: "",
        yearOfPassing: "",
        percentage: ""
      },
      {
        examPassed: "12th",
        schoolCollege: "",
        yearOfPassing: "",
        percentage: ""
      },
      {
        examPassed: "ITI/Diploma",
        schoolCollege: "",
        yearOfPassing: "",
        percentage: ""
      }
    ],
    uploadFiles: {
      passport: null,
      certificate: null,
      aadhar: null
    }
  });

  const Navigate = useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle nested address input changes
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value
      }
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedEducation = prevFormData.education.map((edu, idx) =>
        idx === index ? { ...edu, [name]: value } : edu
      );

      return {
        ...prevFormData,
        education: updatedEducation
      };
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      uploadFiles: {
        ...prevData.uploadFiles,
        [name]: files[0]
      }
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("post", formData.post);
    data.append("candidateName", formData.candidateName);
    data.append("dateOfBirth", formData.dateOfBirth);
    data.append("mobileNumber", formData.mobileNumber);
    data.append("fatherName", formData.fatherName);
    data.append("gender", formData.gender);
    data.append("emailId", formData.emailId);

    // Append address fields if they exist
    if (formData.address) {
      data.append("houseNumber", formData.address.houseNumber);
      data.append("policeStation", formData.address.policeStation);
      data.append("city", formData.address.city);
      data.append("pincode", formData.address.pincode);
      data.append("postOffice", formData.address.postOffice);
      data.append("district", formData.address.district);
      data.append("state", formData.address.state);
    }

    // Append education fields if they exist
    if (formData.education) {
      formData.education.forEach((edu, index) => {
        data.append(`education[${index}][examPassed]`, edu.examPassed);
        data.append(`education[${index}][schoolCollege]`, edu.schoolCollege);
        data.append(`education[${index}][yearOfPassing]`, edu.yearOfPassing);
        data.append(`education[${index}][percentage]`, edu.percentage);
      });
    }

    // Append uploaded files if they exist
    if (formData.uploadFiles) {
      data.append("passport", formData.uploadFiles.passport);
      data.append("certificate", formData.uploadFiles.certificate);
      data.append("aadhar", formData.uploadFiles.aadhar);
    }

    try {
      const response = await fetch("http://localhost:4000/application/create", {
        method: "POST",
        // headers: {
        //   "Content-Type":"application/json",
        // },
        body: data
      });

      // console.log("Form Data Submitted:", data);

      const appData = await response.json();
      console.log("Response from backend:", appData);

      if (response.ok) {
        alert("Data added successfully");
        Navigate("/thank-you")
        console.log(response);
      }
    } catch (error) {
      alert("Failed to submit form");
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="float-contains">
        <div className="logo">
          <img src={logo} alt="Sailors Wave Logo" />
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <img src={emailIcon} alt="Email Icon" />
            <span>sailorswaveshipmanagement@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" />
            <span>+91 9876543210</span>
          </div>
        </div>
      </div>

      <div className="form-div">
        <div className="text-center">
          <h4 className="application">APPLICATION FORM FOR MERCHANT NAVY</h4>
          <h4 className="application">
            APPLICATION FOR ADMISSION IN MARINE TRAINING
          </h4>
        </div>
        <br />
        <form onSubmit={submitHandler} className="form-total-1">
          <br />
          <p className="side-header">&nbsp;&nbsp;PERSONAL DETAILS</p>
          <div className="apply-section">
            <label>Apply for post</label>
            <select className="post-select" name="post" value={formData.post} onChange={handleChange}>
              <option value="">Select for post</option>
              <option value="Sea man">Sea man</option>
              <option value="Deck Rating">Deck Rating</option>
              <option value="Engine Rating">Engine Rating</option>
              <option value="Cook">Cook</option>
              <option value="Fitter">Fitter</option>
              <option value="Welder">Welder</option>
              <option value="Electrician">Electrician</option>
              <option value="Mess Boy">Mess Boy</option>
            </select>
          </div>
          <br />
          <div className="row container text-start">
            <div className="col">
              <div>
                <label htmlFor="candidateName" className="candidate-label">
                  Candidate Name<span className="span-red">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleChange}
                  className="input-width-1"
                  placeholder="Candidate Name"
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="candidate-label">
                  Date of birth<span className="span-red">*</span>
                </label>
                <br />
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="input-width-1"
                  placeholder="DD-MM-YY"
                />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="candidate-label">
                  Mobile number
                </label>
                <br />
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="input-width-1"
                  placeholder="+91 9848226644"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label htmlFor="fatherName" className="candidate-label">
                  Father name<span className="span-red">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="input-width-1"
                  placeholder="Father name"
                />
              </div>
              <div>
                <label htmlFor="gender" className="candidate-label">
                  Gender
                </label>
                <br />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="input-width-1"
                >
                  <option className="form-option" value="">
                    Select
                  </option>
                  <option
                    className="form-option"
                    value="male"
                    placeholder="Male"
                  >
                    Male
                  </option>
                  <option
                    className="form-option"
                    value="female"
                    placeholder="Female"
                  >
                    Female
                  </option>
                  <option
                    className="form-option"
                    value="Other"
                    placeholder="Other"
                  >
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label className="candidate-label">Email Id</label>
                <br />
                <input
                  type="email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  className="input-width-1"
                  placeholder="Example@gmail.com"
                />
              </div>
            </div>
          </div>
          <br />
          {/* akshaya _________________________________________ */}

          <p className="side-header1">ADDRESS OF CANDIDATES</p>
          <div className="row container candidate-address">
            <div className="col">
              <div className="form-group">
                <label
                  htmlFor="address.houseNumber"
                  className="candidate-label"
                >
                  House number
                </label>
                <br />
                <input
                  type="text"
                  name="houseNumber"
                  value={formData.address.houseNumber}
                  onChange={handleAddressChange}
                  className="input-width-1"
                  placeholder="House number"
                />
              </div>
              <div className="form-group">
                <label className="candidate-label">
                  Police station<span className="span-red">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="policeStation"
                  value={formData.address.policeStation}
                  onChange={handleAddressChange}
                  className="input-width-1"
                  placeholder="Police station"
                />
              </div>
              <div className="form-group">
                <label className="candidate-label">Select city</label>
                <br />
                <select
                  className="input-width-1"
                  name="city"
                  value={formData.address.city}
                  onChange={handleAddressChange}
                >
                  <option className="form-option" value="">
                    Select
                  </option>
                  <option className="form-option" value="City 1">
                    City 1
                  </option>
                  <option className="form-option" value="City 2">
                    City 2
                  </option>
                  <option className="form-option" value="City 3">
                    City 3
                  </option>
                  <option className="form-option" value="City 4">
                    City 4
                  </option>
                </select>
              </div>
              <div className="form-group-1">
                <label className="candidate-label">Pincode</label>
                <br />
                <input
                  type="text"
                  name="pincode"
                  value={formData.address.pincode}
                  onChange={handleAddressChange}
                  className="input-width-1"
                  placeholder="Pincode"
                />
              </div>
            </div>
            <div className="col ">
              <div className="form-group">
                <label className="candidate-label">
                  Post office<span className="span-red">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="postOffice"
                  name="postOffice"
                  value={formData.address.postOffice}
                  onChange={handleAddressChange}
                  className="input-width-1"
                  placeholder="Post office"
                />
              </div>

              <div className="form-group-1">
                <label className="candidate-label">
                  District<span className="span-red">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="district"
                  value={formData.address.district}
                  onChange={handleAddressChange}
                  className="input-width-1"
                  placeholder="District"
                />
              </div>

              <div className="form-group-1">
                <label className="candidate-label">Select state</label>
                <br />
                <select
                  className="input-width-1"
                  name="state"
                  value={formData.address.state}
                  onChange={handleAddressChange}
                >
                  <option className="form-option" value="">
                    Select
                  </option>
                  <option className="form-option" value="State 1">
                    State 1
                  </option>
                  <option className="form-option" value="State 2">
                    State 2
                  </option>
                  <option className="form-option" value="State 3">
                    State 3
                  </option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <p className="side-header1">EDUCATIONAL QUALIFICATION</p>
          <div className="row container exam-row">
            <label className="col group-label1">Exam passed</label>
            <label className="col group-label1">School/college</label>
            <label className="col group-label1">Year of passing</label>
            <label className="col group-label1">Percentage%</label>
          </div>
          <br />
          {formData.education.map((edu, index) => (
            <div key={index} className="row container exam-row">
              <input
                className="col input-width-2 me-4"
                type="text"
                name="examPassed"
                value={edu.examPassed}
                readOnly
              />
              <input
                className="col input-width-3"
                type="text"
                name="schoolCollege"
                placeholder="School/College"
                value={edu.schoolCollege}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                className="col input-width-3 mx-4"
                type="text"
                name="yearOfPassing"
                placeholder="Year of Passing"
                value={edu.yearOfPassing}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                className="col input-width-3"
                type="text"
                name="percentage"
                placeholder="Percentage"
                value={edu.percentage}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>
          ))}

          {/* <div className="row container exam-row">
          <input className="col input-width-2" type="text" name="tenth.examPassed" value="10th" style={{border:"none"}} readOnly />
          <input className="col input-width-3" type="text" name="tenth.schoolCollege" value={formData.education.tenth.schoolCollege} onChange={handleEducationChange} />
          <input className="col input-width-3" type="text" name="tenth.yearOfPassing" value={formData.education.tenth.yearOfPassing} onChange={handleEducationChange} />
          <input className="col input-width-3" type="text" name="tenth.percentage" value={formData.education.tenth.percentage} onChange={handleEducationChange} />
          </div>*/}

          {/* shivani _________________________________________ */}
          <div className="container11">
            <p className="upload11">
              UPLOAD PICTURE (*Select image of less than 2MB)
            </p>
            <div className="form-group">
              <label className="form-label1">
                Upload your passport size picture (.jpg)
              </label>
              <input
                type="file"
                name="passport"
                onChange={handleFileChange}
                className="input1"
              />
            </div>
            <hr />
            <div className="form-group">
              <label className="form-label1">
                Upload your class 10th certificate (.jpg)
              </label>
              <input
                type="file"
                name="certificate"
                onChange={handleFileChange}
                className="input1"
              />
            </div>
            <hr />
            <div className="form-group">
              <label className="form-label1" htmlFor="aadhar">
                Upload your Aadhar card (.jpg)
              </label>
              <input
                type="file"
                name="aadhar"
                onChange={handleFileChange}
                className="input1"
              />
            </div>
            <hr />
            <div className="declaration">
              <p className="declare-heading">DECLARATION:</p>
              <p className="declare11">
                I declare that the particular furnished above are true to the
                best of my knowledge and belief and whenever called for the
                records shall be furnished.
              </p>
            </div>
          </div>
          <button className="form-submit" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default ApplicationPage;
