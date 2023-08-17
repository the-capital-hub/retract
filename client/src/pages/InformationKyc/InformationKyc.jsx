import React from "react";
import "./InformationKyc.scss";
import { Footer, Navbar } from "../../components";
import contactIcon from "../../assets/informationKyc/contact.svg";
import videoKycIcon from "../../assets/informationKyc/Group 15474.png";
import dvIcon from "../../assets/informationKyc/Group 15475.png";
import adressIcon from "../../assets/informationKyc/Group 15476.png";
import faceIcon from "../../assets/informationKyc/Group 15477.png";
import twoFactIcon from "../../assets/informationKyc/Group 15478.png";

const InformationKyc = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid information_kyc_container">
        <div className="container">
          <h1 className="heading-text">
            <span style={{ color: "#E46000" }}>KYC</span> - KNOW YOUR CUSTOMER
          </h1>

          <section className="heading_section mb-2">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="heading-h1">
                  What Is <span style={{ color: "#E46000" }}> KYC</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elementum fringilla
                  interdum blandit fames. Cras varius diam orci est iaculis diam
                  ridiculus. Non sit fusce blandit ut et quis etiam ut euismod
                  arcu ullamcorper.
                </p>
              </div>
              <div className="col-lg-4 mobile-contactimg">
                <img src={contactIcon} alt="image" className="contactImg" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h1 className="heading-h1">
                  What Is KYC
                  <span style={{ color: "#E46000" }}> Verification?</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elementum fringilla
                  interdum blandit fames. Cras varius diam orci est iaculis diam
                  ridiculus. Non sit fusce blandit ut et quis etiam ut euismod
                  arcu ullamcorper.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="kyc_process row">
          <h1 className="kyc_heading">
            {" "}
            <span style={{ color: "#E46000" }}> KYC </span>Process
          </h1>
          <section class="card-section row">
            <div class="card col-md-12">
              <p>
                {" "}
                1. <span style={{ color: "#E46000" }}>Video</span> KYC
              </p>
            </div>
            <div class="card col-md-12">
              <p>
                2. <span style={{ color: "#E46000" }}>ID</span> Verification
              </p>
            </div>
            <div class="card col-md-12">
              <p>
                3. <span style={{ color: "#E46000" }}>Address</span>{" "}
                Verification
              </p>
            </div>
            <div class="card col-md-12">
              <p>
                {" "}
                4. <span style={{ color: "#E46000" }}>Face</span> Verification
              </p>
            </div>
            <div class="card col-md-12">
              <p>
                {" "}
                5. Factor
                <span style={{ color: "#E46000" }}> Authentication</span>
              </p>
            </div>
          </section>
        </section>

        <section className="video_kyc row">
          <div className="col-lg-8 justify_item">
            <h1 className="heading-h1 margin-left">
              Video
              <span style={{ color: "#E46000" }}> KYC</span>
            </h1>
            <p className="margin-left">
              Lorem ipsum dolor sit amet consectetur. Elementum fringilla
              interdum blandit fames. Cras varius diam orci est iaculis diam
              ridiculus. Non sit fusce blandit ut et quis etiam ut euismod arcu
              ullamcorper.
            </p>
          </div>
          <div className="col-lg-4 kyc_image">
            <img src={videoKycIcon} alt="image" />
          </div>
        </section>

        <section className="document_verification row">
          <div className="col-lg-3 kyc_image hide-mobile-display">
            <img src={dvIcon} alt="image" />
          </div>
          <div className="col-lg-8 justify_item">
            <h1 className="heading-h1">
              <span style={{ color: "#E46000" }}>ID</span>&nbsp; Document
              Verification
            </h1>
            <p className="margin-left">
              Lorem ipsum dolor sit amet consectetur. Elementum fringilla
              interdum blandit fames. Cras varius diam orci est iaculis diam
              ridiculus. Non sit fusce blandit ut et quis etiam ut euismod arcu
              ullamcorper.
            </p>
          </div>
          <div className="col-lg-3 kyc_image hide-desktop-display mobile-display">
            <img src={dvIcon} alt="image" />
          </div>
        </section>

        <section className="address_kyc row">
          <div className="col-lg-8 justify_item">
            <h1 className="heading-h1 margin-left">
              Address
              <span style={{ color: "#E46000" }}> Verification</span>
            </h1>
            <p className="margin-left">
              Lorem ipsum dolor sit amet consectetur. Elementum fringilla
              interdum blandit fames. Cras varius diam orci est iaculis diam
              ridiculus. Non sit fusce blandit ut et quis etiam ut euismod arcu
              ullamcorper.
            </p>
          </div>
          <div className="col-lg-4 kyc_image">
            <img src={adressIcon} alt="image" />
          </div>
        </section>

        <section className="face_verification row">
          <div className="col-lg-3 kyc_image hide-mobile-display">
            <img src={faceIcon} alt="image" />
          </div>
          <div className="col-lg-8 justify_item">
            <h1 className="heading-h1">
              <span style={{ color: "#E46000" }}>Face</span>&nbsp; Verification
            </h1>
            <p className="margin-left">
              Lorem ipsum dolor sit amet consectetur. Elementum fringilla
              interdum blandit fames. Cras varius diam orci est iaculis diam
              ridiculus. Non sit fusce blandit ut et quis etiam ut euismod arcu
              ullamcorper.
            </p>
          </div>
          <div className="col-lg-3 kyc_image hide-desktop-display mobile-display">
            <img src={faceIcon} alt="image" />
          </div>
        </section>

        <section className="two_factor row">
          <div className="col-lg-8 justify_item">
            <h1 className="heading-h1 margin-left">
              <span style={{ color: "#E46000" }}> 2-Factor</span>Authentication
            </h1>
            <p className="margin-left">
              Lorem ipsum dolor sit amet consectetur. Elementum fringilla
              interdum blandit fames. Cras varius diam orci est iaculis diam
              ridiculus. Non sit fusce blandit ut et quis etiam ut euismod arcu
              ullamcorper.
            </p>
          </div>
          <div className="col-lg-4 kyc_image">
            <img src={twoFactIcon} alt="image" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InformationKyc;
