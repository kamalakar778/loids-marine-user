import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import "./Header.css";
import LoidsLogo from "../../assets/Loids-Logo-1.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex">
        <div className="Loids-Logo">
          <img src={LoidsLogo} alt="Sailors Wave Logo" />
        </div>
        <div className="contact-info-header">
          <div className="contact-item">
            <img src={emailIcon} alt="Email Icon" />
            <span>sailorswaveshipmanagement@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" />
            <span>+91 9876543210</span>
          </div>
          <button className="apply-btn" onClick={() => { navigate("/ApplicationPage")}}>Apply now</button>
        </div>
      </div>
    </>
  );
};

export default Header;
