import React from 'react'
import WhyChoose1 from "../../assets/WhyChoose-1.jpeg";
import WhyChoose2 from "../../assets/WhyChoose-2.jpeg";
import WhyChoose3 from "../../assets/WhyChoose-3.jpeg";
import "./WhyChooseSailorsWave.css";

const WhyChooseSailorsWave = () => {
    return (
        <>
            <div className="why-choose">
                <br/>
                <p className="choosing">Why choose sailorswave</p>
                <div className="row card-row">
                    <div className="col">
                        <div className="card card-size" id="card-control">
                            <img className="card-img-top1" src={WhyChoose1} alt="Card image cap" />
                            <div className="card-body card-body1">
                                <p className="card-title sailors-title">Expertise And Experience</p>
                                <p className="card-text card-text1">Our Team Comprises Seasoned Professionals With Extensive Experience in The Maritime industry.  We Bring Deep Insights And Practical Knowledge To Every Project We Undertake.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-size" id="card-control">
                            <img className="card-img-top2" src={WhyChoose2} alt="Card image cap" />
                            <div className="card-body card-body1">
                                <p className="card-title sailors-title">Commitment To Quality</p>
                                <p className="card-text card-text1">Quality Is At The Core Of Everything We Do. We Adhere To the Highest Standards In All Our Services, Ensuring Reliability And Excellence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-size" id="card-control">
                            <img className="card-img-top3" src={WhyChoose3} alt="Card image cap" />
                            <div className="card-body card-body1">
                                <p className="card-title sailors-title">Customized Solutions</p>
                                <p className="card-text card-text1">We Understand That Every Client Has Unique Needs. Our Services Are Tailored To Meet The Specific Requirements Of Each Client, Ensuring Maximum Satisfaction And Efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseSailorsWave
