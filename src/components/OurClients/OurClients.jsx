import React from "react";
import "./OurClients.css";
import GrassLeft from "../../assets/Grass-Left.png";
import GrassRight from "../../assets/Grass-Right.png";

import Photo16 from "../../assets/Photo-16.png";
import Frame from "../../assets/Frame-1.png";
import Star from "../../assets/Star-1.png";

const OurClients = () => {
  return (
    <>
      <br />
      <div className="div-background">
        <br />
        <div className="jumbotron text-center  text-white">
          <br />
          <br />
          <h5 className="display-4 title-text-1">
            What Our Clients Say About Us
          </h5>
          <br />

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <img src={GrassLeft} className="feather1" alt="feather-1-image"/>
              </div>
              <div className="col-sm">
                <p id="rating">5.0 User Rating </p>
                <img src={Star} className="star-mobile" alt="star-icon"/>
                <img src={Star} className="star-mobile" alt="star-icon"/>
                <img src={Star} className="star-mobile"alt="star-icon"/>
                <img src={Star} className="star-mobile"alt="star-icon"/>
                <img src={Star} className="star-mobile"alt="star-icon"/>
              </div>
              <div className="col-sm">
                <img src={GrassRight} className="feather2"  alt="feather-2-image"/>
              </div>
            </div>
            <br />
            <p className="helping">
              Helping 4,000 Peoples take beautiful screenshots everyday
            </p>
            <div className="row">
              <img src={Frame} alt="..." className="pics-row" />
            </div>
          </div>
        </div>

        <div className="row align-cards">
          <div className="col">
            <div className="card scaling card-body-1">
              <div className="row">
                <div className="card-image">
                  <img src={Photo16} alt="profile-icon"/>
                </div>
                <div className="row card-name">
                  <div className="designation">
                    <p className="card-title1">Leo</p>
                    <p className="card-subtitle mb-2 text-muted">
                      Lead Designer
                    </p>
                  </div>
                </div>
                {/* Lead Designer Card */}
                <div className="col stars starImages-container">
                  <img src={Star} className="star-mobile-1" alt="star-icon" />
                  <img src={Star} className="star-mobile-1" alt="star-icon"/>
                  <img src={Star} className="star-mobile-1" alt="star-icon"/>
                  <img src={Star} className="star-mobile-1" alt="star-icon"/>
                  <img src={Star} className="star-mobile-1" alt="star-icon"/>
                </div>
              </div>
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt. Suspendisse
                sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card scaling card-body2">
              <div className="row">
                <div className="card-image">
                  <img src={Photo16} alt="profile-icon" />
                </div>
                <div className="row card-name">
                  <div className="designation">
                    <p className="card-title1">Leo</p>
                    <p className="card-subtitle mb-2 text-muted">
                      Lead Designer
                    </p>
                  </div>
                  <div className="col stars starImages-container">
                    <img src={Star} className="star-mobile-1" />
                    <img src={Star} className="star-mobile-1" />
                    <img src={Star} className="star-mobile-1" />
                    <img src={Star} className="star-mobile-1" />
                    <img src={Star} className="star-mobile-1" />
                  </div>
                </div>
              </div>
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt. Suspendisse
                sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card scaling card-body3">
              <div className="row">
                <div className="card-image">
                  <img src={Photo16} />
                </div>
                <div className="row card-name">
                  <div className="designation">
                    <p className="card-title1">Leo</p>
                    <p className="card-subtitle mb-1 text-muted">
                      Lead Designer
                    </p>
                  </div>
                  <div className="col stars starImages-container">
                    <img src={Star} className="star-mobile-1" />
                    <img src={Star} className="star-mobile-1" />
                    <img src={Star} className="star-mobile-1" />
                    <img src={Star} className="star-mobile-1" />
                    <img src={Star} className="star-mobile-1" />
                  </div>
                </div>
              </div>
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt. Suspendisse
                sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
