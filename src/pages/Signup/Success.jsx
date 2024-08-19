import React from "react";
import { useNavigate } from "react-router-dom";
import SuccessIcon from "../../assets/Success-icon.png";

const Success = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <img src={SuccessIcon} className="w-auto"/>
        <br/>
        <p className="heading-1">Successfully</p>
        <br/>
        <p>Press continue to redirect to home page</p>
        <br />
        <button
          onClick={() => {
            Navigate("/");
          }}
          className="adjust-button"
        >
          Continue
        </button>
      </div>
    </>
  );
};
export default Success;
