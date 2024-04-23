import React from "react";
import "./styles.css";
import lenderCartoon from "../../assets/lender-cartoon.jpg";
import agentCartoon from "../../assets/agent-cartoon.jpg";
import customerCartoon from "../../assets/customer-cartoon.png";
import { Link } from "react-router-dom";
export default function LoginCards() {
  return (
    <div className="py-5 bg-dark" id="login-cards">
      <h1 className="text-center text-warning">Portal logins</h1>
      <hr className="w-25 mx-auto border border-warning" />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-team shadow-lg bg-dark border border-dark rounded">
              <div className="img-area">
                <img
                  src={lenderCartoon}
                  className="img-responsive"
                  height={400}
                  alt=""
                />
                <div className="social">
                  <div className="d-flex flex-column">
                    <Link
                      to="/signup"
                      className="btn btn-outline-warning mb-3 px-5"
                    >
                      Register
                    </Link>
                    <Link to="/signin" className="btn btn-warning px-5">
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
              <div className="img-text bg-light text-dark text-center py-3 rounded border border-dark">
                <h5 className="text-uppercase">Lender Portal</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-team shadow-lg bg-dark border border-dark rounded">
              <div className="img-area">
                <img src={agentCartoon} className="" height={400} alt="" />
                <div className="social">
                  <div className="d-flex flex-column">
                    <Link
                      to="/signup"
                      className="btn btn-outline-warning mb-3 px-5"
                    >
                      Register
                    </Link>
                    <Link to="/signin" className="btn btn-warning px-5">
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
              <div className="img-text bg-light text-dark text-center py-3 rounded border border-dark">
                <h5 className="text-uppercase">Agent Portal</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-team shadow-lg bg-dark border border-dark rounded">
              <div className="img-area ">
                <img
                  src={customerCartoon}
                  className="bg-warning"
                  height={400}
                  alt=""
                />
                <div className="social">
                  <div className="d-flex flex-column">
                    <Link
                      to="/signup"
                      className="btn btn-outline-warning mb-3 px-5"
                    >
                      Register
                    </Link>
                    <Link to="/signin" className="btn btn-warning px-5">
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
              <div className="img-text bg-light text-dark text-center py-3 rounded border border-dark">
                <h5 className="text-uppercase">Customer Portal</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
