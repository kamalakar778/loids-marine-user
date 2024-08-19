import React, { useRef, useState } from "react";
import Page3Image from "../../assets/page-3-img.jpeg";
import "./Verification.css";
import SailorsLogo2 from "../../../src/assets/Sailors-Logo-2.png";
import {useNavigate} from "react-router-dom";


const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeRemain, setTimeRemain] = useState("00:59");

  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.match(/^[0-9]$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      console.log("newOtp",newOtp)

      // Move to the next input field if not the last
      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      // Clear the input if the value is not a digit
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      console.log("newOtp",newOtp)
    }
  };

  // const handleKeyDown = (e, index) => {
  //   if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
  //     inputRefs.current[index - 1].focus();
  //   }
  // };

  const Navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(otp)
    const otpValue = otp.join("");
    console.log("OTP Entered:", otpValue);
    const newOtp = {otp:otpValue}
    console.log("new otp",newOtp)
    // alert("otp sent successfully", otpValue);

    try {
      const response = await fetch("http://localhost:4000/user/verify-otp", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOtp)
      });
      const otpVerified = await response.json();
      // console.log("otp errr", otpVerified);
      if (response.ok) {
        // alert("Data added successfully");
        Navigate("/Success");
        console.log(response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col left-div">
          <img src={Page3Image} className="image-1" alt="Page 3 Icon" />
        </div>
        <div className="col right-div">
          <img src={SailorsLogo2} className="sailors-logo" alt="SailorsLogo2" />
          <form onSubmit={submitHandler} className="form-div-2 text-center">
            <div className="col">
              <p className="text-1">Verification</p>
              <p className="text-2" style={{ fontSize: "14px" }}>
                Enter your 4 digits code that you received on your email.
              </p>
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                  // onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="input-style text-center"
                />
              ))}
              <br />
              <br />
              <div style={{ color: "red" }}>{timeRemain}</div>
              <br />
              <button className="adjust-button">CONTINUE</button>
              <br />
              <br />
              <p className="text-2" style={{ fontSize: "12px" }}>
                if you didn't receive a code!{" "}
                <span style={{ color: "red", fontSize: "12px" }}>Resend</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verification;
