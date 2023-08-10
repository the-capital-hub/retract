import React from "react";
import "./Footer.scss";
import FbIcon from "../../assets/footer/Fb.svg";
import TwIcon from "../../assets/footer/Tw.svg";
import InIcon from "../../assets/footer/In.svg";
import YtIcon from "../../assets/footer/Yt.svg";




const Footer = () => {
  return (
    <div className="container-fluid footer_container">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12 d-flex justify-content-center align-items-center ">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae
              vulputate eu vitae tristique.raju
            </p> */}
          </div>
          <div className="col-md-2 col-sm-6 footer_list_item">
            <h4>General</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Courses
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 footer_list_item">
            <h4>Policies</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Security safeguards
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 footer_list_item">
            <h4>Get in touch</h4>
            <p>
              Follow us on social media and stay updated with the latest
              information about our services
            </p>
            <div className="d-flex justify-content-start">
              <img src={FbIcon} alt="img" style={{margin:"0px 2px"}} />
              <img src={TwIcon} alt="img" style={{margin:"0px 2px"}} />
              <img src={InIcon} alt="img" style={{margin:"0px 2px"}} />
              <img src={YtIcon} alt="img" style={{margin:"0px 2px"}} />
            </div>
          </div>
          <div className="col-md-3 col-sm-6 footer_list_item">
            <h4>Subscribe to our Newsletter</h4>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur. Velit enim est urna est
              massa cras. Sed varius convallis netus aliquet duis ut.
            </p> */}
            <div className="input-group mb-3 subscribe_input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
              />
              <div className="input-group-append">
                <button className="subscribe_btn" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col copyright_text">
            <h5>2022 - &copy;Lorem all right deserved</h5>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
