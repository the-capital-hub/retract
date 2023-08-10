import NavBar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import "./Landing.scss";
import requestDemo from "../../assets/landingPage/request-a-demo.svg";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import DocumentVerification from "../../assets/landingPage/document-validation.svg";
import featureImage from "../../assets/landingPage/identity-verification.png";
import dataVerification from "../../assets/landingPage/data-verification.svg";
import biometricVerification from "../../assets/landingPage/biometric-verification.svg";

function Landing() {
  return (
    <>
      <NavBar />
      <div className="container-lg">
        <Title
          title="KYC - KNOW YOUR CUSTOMER"
          subtitle="Fast, flexible and simple KYC, KYB, KYI, AML and OCR solutions tailored to your needs will improve customer experience and reduce fraud"
        />
        <div className="container-lg group-4-kLX" id="44:526">
          <div className="line-5-reT" id="44:527"></div>
          <div className="frame-2-9tT" id="44:529">
            TRY FOR FREE
          </div>
          <div className="request-a-demo-bkT" id="44:530">
            Request a demo
            <img className="group-2-v23" src={requestDemo} id="44:531" />
          </div>
          <div className="line-6-rRV" id="44:528"></div>
        </div>
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
        <section className="stat-section container rounded-5">
          <h1 className="text-center text-white">
            YOUR PATHWAY TO UNPRECEDENTED TRUST AND GROWTH
          </h1>
          <div className="stat-cards row row-cols-5 justify-content-center mt-5 gap-5">
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
        <section className="video-section row row-cols-1 row-cols-md-2">
          
        </section>
      </div>
    </>
  );
}

export default Landing;
