import React, {useState} from "react";
import "./AboutUs.css";
import navyPic from "../../assets/navy-pic.jpeg";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:''
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]:value});

  }
  const handleSubmit = (e) =>{
    e.preventdefault();
    console.log("formdata outputed", formData)
  }
  return (
    <>
      
      <div className="total_about">
        <div className="about_us">
          <p id="about">About Us</p>
          <div className="para">
            
            Welcome to Sailors wave Shipment Management Pvt Ltd, your trusted
            partner in comprehensive maritime solutions. Established in 2022,
            Sailors wave is dedicated to delivering top-tier services in onshore
            resource management, offshore resource management, training, and
            placements. Our mission is to support and enhance the global
            maritime industry by providing innovative and reliable solutions
            tailored to meet the unique needs of our clients.
          </div>
          <div className="buttons">
            <button id="button1">Contact Us</button>
            <button id="button2">Apply Now</button>
          </div>
        </div>
        <div>
        <img className="sailors" src={navyPic} />
        </div>
      </div>
      <br/>
      

    </>
  );
};

export default AboutUs;
