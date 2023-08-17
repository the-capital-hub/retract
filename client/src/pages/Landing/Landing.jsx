import { useNavigate } from "react-router-dom";

import { Footer, Navbar } from "../../components";
import Title from "../../components/Title/Title";
import "./Landing.scss";
import requestDemo from "../../assets/landingPage/request-a-demo.svg";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import DocumentVerification from "../../assets/landingPage/document-validation.svg";
import featureImage from "../../assets/landingPage/identity-verification.png";
import dataVerification from "../../assets/landingPage/data-verification.svg";
import biometricVerification from "../../assets/landingPage/biometric-verification.svg";
import verificationVideo from "../../assets/landingPage/retract-verification-video.png";
import Button from "../../components/Button/Button";
import newKycImage from "../../assets/landingPage/new-kyc.png";
import faceVerificationImage from "../../assets/landingPage/face-verification.png";
import faceBiometricImage from "../../assets/landingPage/facial-biometric.png";
import noCodeJourneyImage from "../../assets/landingPage/no-code-journey.png";
import coverIdentityVerification from "../../assets/landingPage/cover-identity-verification.png";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Title
        title="KYC - KNOW YOUR CUSTOMER"
        subtitle="Fast, flexible and simple KYC, KYB, KYI, AML and OCR solutions tailored to your needs will improve customer experience and reduce fraud"
      />
      <div
        onClick={() => navigate("/kyc")}
        className="container mx-auto group-4-kLX"
        role="button"
        id="44:526"
      >
        <div className="line-5-reT d-none d-md-block" id="44:527"></div>
        <div className="frame-2-9tT" id="44:529">
          TRY FOR FREE
        </div>
        <div className="request-a-demo-bkT" id="44:530">
          Request a demo
          <img className="group-2-v23" src={requestDemo} id="44:531" />
        </div>
        <div className="line-6-rRV  d-none d-md-block" id="44:528"></div>
      </div>
      <section className="responsive_feature d-block d-md-none">
        <img className="w-100" src={coverIdentityVerification} alt="" />
      </section>
      <section className="feature">
        <img className="feature-image" width="400px" src={featureImage} />
        <FeatureCard
          img={dataVerification}
          title="Data Verification"
          desc="Don't keep customers waiting with fully automated checkout"
        />
        <FeatureCard
          img={biometricVerification}
          title="Biometric Verification"
          desc="See the person behind the screen"
        />
        <FeatureCard
          img={dataVerification}
          title="Fraud Detection"
          desc="Reduce fraud losses, protect your brand customers"
        />
        <FeatureCard
          img={DocumentVerification}
          title="Document Verification"
          desc="Stop fraud before it impacts your business"
        />
        <div className="identity-verification">
          <h5>Identity Verification</h5>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p>Name</p>
              <h6>Jackson</h6>
            </div>
            <div className="d-flex flex-column  w-50">
              <p>Age</p>
              <h6>26</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p>ID number</p>
              <h6>3456779</h6>
            </div>
            <div className="d-flex flex-column w-50">
              <p>Nationality</p>
              <h6>Hindhu</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="stat-section container mx-auto rounded-5">
        <h1 className="text-center text-white">
          YOUR PATHWAY TO UNPRECEDENTED TRUST AND GROWTH
        </h1>
        <div className="stat-cards row row-cols-1 row-cols-md-5 justify-content-center mt-5 gap-5">
          <div className="stat-card d-flex flex-column p-3 text-center">
            <p>End-User Happiness</p>
            <p>Upto</p>
            <h2 className="h-50">94.44%</h2>
          </div>
          <div className="stat-card d-flex flex-column p-3 text-center">
            <p>First-Go Pass Rate</p>
            <p>Upto</p>
            <h2 className="h-50">98.6%</h2>
          </div>
          <div className="stat-card d-flex flex-column p-3 text-center">
            <p>User Verified within 30s</p>
            <p>Upto</p>
            <h2 className="h-50">91%</h2>
          </div>
          <div className="stat-card d-flex flex-column p-3 text-center">
            <p>AI Accuracy</p>
            <p>Upto</p>
            <h2 className="h-50">99.77%</h2>
          </div>
        </div>
      </section>
      <section className="video-section container mx-auto row row-cols-1 gap-4 gap-md-0 row-cols-md-2">
        <div className="video-text">
          <h3>
            WATCH HOW RETRACT PERFORMS IDENTITY VERIFICATION WITHIN SECONDS
          </h3>
          <ul>
            <li>Extensive Global reach of 230+ Countries</li>
            <li>Efficient 2+2 verification approach</li>
            <li>Multilingual OCR Extraction with 150+ languages</li>
            <li>Synthetic identity fraud detection</li>
            <li>Impenetrable facial authentication fortress</li>
            <li>Intuitive No-Code Verification Journey Builder</li>
          </ul>
        </div>
        <img src={verificationVideo} alt="verification-video" />
      </section>

      <section className="kyc-solutions">
        <h3 className="fw-bold text-center">
          REVOLUTIONARY KYC SOLUTIONS: MINIMIZING DROP-OFFS, EXPANDING HORIZONS
          & MAXIMIZING SUCCESS
        </h3>
        <section className="new-kyc row justify-content-between">
          <div className="col-lg-6 margin-left">
            <h1>
              New KYC
              <span style={{ color: "#E46000" }}> Features</span>
            </h1>
            <p>
              <p>
                Shufti Pro continues to innovate and improve its KYC services
                for fraud prevention. We have just added
              </p>
              <Button text="Learn More" />
            </p>
          </div>
          <div className="col-lg-4 kyc_image">
            <img src={newKycImage} alt="image" />
          </div>
        </section>

        <section className="face_verification row justify-content-between">
          <div className="col-lg-4">
            <img src={faceVerificationImage} alt="image" />
          </div>
          <div className="col-lg-6 margin-right">
            <h1>
              <span style={{ color: "#E46000" }}>Face</span> Verification
            </h1>
            <p>
              Combat identity thefts, impersonation attempts, and Facial
              spoofing attacks with 3D face recognition and liveness detection
              techniques.
            </p>
            <Button text="Learn More" />
          </div>
        </section>

        <section className="facial_biometric row justify-content-between">
          <div className="col-lg-6 margin-left">
            <h1>
              Facial Biometric
              <span style={{ color: "#E46000" }}> Authentication</span>
            </h1>
            <p>
              <p>
                Streamlined enrollment and authentication with advanced
                biometric technology to prevent fraud.
              </p>
              <Button text="Learn More" />
            </p>
          </div>
          <div className="col-lg-4">
            <img src={faceBiometricImage} alt="image" />
          </div>
        </section>

        <section className="no_code_journey row justify-content-between">
          <div className="col-lg-4">
            <img src={noCodeJourneyImage} alt="image" />
          </div>
          <div className="col-lg-6 margin-right">
            <h1>
              <span style={{ color: "#E46000" }}>No-Code</span> Journey Builder
            </h1>
            <p>
              Discover the Ease of a code-free Verification Journey with Shufti
              Pro Journey Builder
            </p>
            <Button text="Learn More" />
          </div>
        </section>
      </section>
      <section className="more_info container mx-auto rounded-5">
        <h1 className="text-center text-white">MORE INFORMATION</h1>
        <div className="more_info_cards row row-cols-1 row-cols-md-5 justify-content-center mt-5 gap-5">
          <div className="more_info_card d-flex flex-column">
            <h6>Platform</h6>
            <p>Global Trust Platform</p>
          </div>
          <div className="more_info_card d-flex flex-column">
            <h6>KYC</h6>
            <p>Conduct Comprehensive KYC verification</p>
          </div>
          <div className="more_info_card d-flex flex-column">
            <h6>KYB</h6>
            <p>Verify the authenticity of a business entity</p>
          </div>
          <div className="more_info_card d-flex flex-column">
            <h6>KYI</h6>
            <p>Verify the authenticity of your investor</p>
          </div>
        </div>
      </section>
      <section className="newsletter container mx-auto">
        <h2>Subscribe to the latest industry updates each week</h2>
        <div className="subscribe_newsletter">
          <input type="text" placeholder="Enter your email" />
          <Button text={"Subscribe"} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Landing;
