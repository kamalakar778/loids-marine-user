import React from 'react'
import MaerskLogo from "../../assets/Maersk-Logo.png";
import MSCLogo from "../../assets/MSC-Logo.png";
import EvergreenLogo from "../../assets/Evergreen-Logo.png";
import HapagLogo from "../../assets/Hapag-Logo.png";
import CMACMGLogo from "../../assets/CMA-CMG-Logo.png";


import "./TrustedByCompanies.css";
const TrustedByCompanies = () => {
    return (
        <>
            <div className="container trusted">
                <div className="jumbotron text-center">
                    <br />
                    <br />
                    <p className="display-6  trusted">Trusted By Companies including</p>
                    <br />
                    <br />
                    <p className="lead shipment">At Sailorswave Shipment Pvt Ltd, our clients are at the heart of everything we do. Established in 2022, we have built a <br />reputation for delivering exceptional service and value to a diverse clientele across the globe.</p>
                    <br />
                    <br />
                    <div className="container text-center comapany-line">
                        <div className="row">
                            <div className="col">
                                <img src={MaerskLogo} style={{height:"2em", width:"8em"}} />
                            </div>
                            <div className="col">
                                <img src={MSCLogo}  style={{height:"3em", width:"8em"}}/>

                            </div>
                            <div className="col">
                                <img src={EvergreenLogo} style={{height:"4em", width:"7em"}} />

                            </div>
                            <div className="col">
                                <img src={HapagLogo}  style={{height:"2em", width:"8em"}}/>

                            </div>
                            <div className="col">
                                <img src={CMACMGLogo} style={{height:"3em", width:"8em"}}/>

                            </div>
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustedByCompanies
