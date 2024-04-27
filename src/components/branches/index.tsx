import React from "react";
import "./styles.css";
import hyderabad from "../../assets/hyderabad.jpg";
import bangalore from "../../assets/Bangalore.jpg";
import delhi from "../../assets/delhi.jpg";
export default function LoginCards() {
  return (
    <div className="py-5 bg-dark" id="login-cards">
      <h1 className="text-center text-warning">Our Branches</h1>
      <hr className="w-25 mx-auto border border-warning" />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-team shadow-lg bg-dark border border-dark rounded">
              <div className="img-area">
                <img
                  src={hyderabad}
                  className="img-responsive"
                  height={400}
                  alt=""
                />
                <div className="social">
                  <div className="d-flex flex-column">
                    <h1 style={{ color: "#ffc107" }}>Hyderabad</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-team shadow-lg bg-dark border border-dark rounded">
              <div className="img-area">
                <img src={bangalore} className="" height={400} alt="" />
                <div className="social">
                  <div className="d-flex flex-column">
                    <h1 style={{ color: "#ffc107" }}>Bangalore</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-team shadow-lg bg-dark border border-dark rounded">
              <div className="img-area ">
                <img src={delhi} className="bg-warning" height={400} alt="" />
                <div className="social">
                  <div className="d-flex flex-column">
                    <h1 style={{ color: "#ffc107" }}>Delhi</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
