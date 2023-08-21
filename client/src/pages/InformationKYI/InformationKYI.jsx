import { Button, Footer, Navbar } from "../../components";
import "./InformationKYI.scss";
import contactIcon from "../../assets/informationKyc/contact.svg";
import verificationCardIcon1 from "../../assets/informationKyi/verification-mlro.svg";
import verificationCardIcon2 from "../../assets/informationKyi/team-verification.svg";

function InformationKYI() {
  return (
    <>
      <Navbar />
      <div className="container-fluid information_kyi_container">
        <div className="container">
          <h1 className="heading-text">
            <span style={{ color: "#E46000" }}>KYI</span> - KNOW YOUR INVESTORS
          </h1>
          <section className="heading_section mb-2">
            <div className="row">
              <div className="">
                <h1 className="heading-h1">
                  What Is <span style={{ color: "#E46000" }}> KYI</span>
                </h1>
                <div className="what-is-kyi">
                  <img
                    src={contactIcon}
                    alt="image"
                    className="contactImg mx-auto"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Elementum fringilla
                    interdum blandit fames. Cras varius diam orci est iaculis
                    diam ridiculus. Non sit fusce blandit ut et quis etiam ut
                    euismod arcu ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="kyc_process row">
          <h1 className="kyc_heading">
            STREAMLINED PROCESS FOR ONBOARDING ONLINE INVESTORS WORLDWIDE
          </h1>
          <div className="more_info_cards row row-cols-1 row-cols-md-5 justify-content-center mb-5 gap-5">
            <div className="more_info_card d-flex flex-column">
              <p>
                1. Investors upload their government-issued ID and pertaining
                documents
              </p>
            </div>
            <div className="more_info_card d-flex flex-column">
              <p>2. Shufti Pro's expert MLROs validate investors' documents</p>
            </div>
            <div className="more_info_card d-flex flex-column">
              <p>3. Screens investors against 1700+ watchlists</p>
            </div>
            <div className="more_info_card d-flex flex-column">
              <p>
                4. Verification results are stored in the client's back office
              </p>
            </div>
          </div>
        </section>

        <section className="verify-investor container">
          <h1>
            POWERFUL & INNOVATIVE COMPLIANCE PLATFORM HELPING YOU
            VERIFYINVESTORS REMOTELY
          </h1>
          <div className="investor-shufti p-3 flex-grow-1 w-100 d-flex flex-column flex-lg-row">
            <h3 className="p-3">Investors Shufti Pro Verify</h3>
            <div className="mx-md-3 p-2 row row-cols-1 row-cols-lg-2 flex-grow-1">
              <span className="d-flex align-items-center">
                <span className="orange-dot"></span>Business shareholders and
                UBOs
              </span>
              <span className="d-flex align-items-center">
                <span className="orange-dot"></span>High-net worth individuals
              </span>
              <span className="d-flex align-items-center">
                <span className="orange-dot"></span>Company directors
              </span>
              <span className="d-flex align-items-center">
                <span className="orange-dot"></span>Private equity
              </span>
            </div>
          </div>
        </section>

        <section className="customisable-approach container">
          <h1>CUSTOMISABLE APPROACH THAT FITS EVERY BUSINESS REQUIREMENT</h1>
          <div className="verification-cards p-3 row row-cols-1 row-cols-md-3 gap-5 justify-content-center align-items-stretch">
            <div className="verification-card">
              <h3 className="text-center text-white mb-4">
                Verification through our MLROs
              </h3>
              <p className="fw-bolder">
                Let Shufti Pro take the hassle of verifying your business
                investors. Our expert compliance officers and MLROs authenticate
                your investors by validating investor's IDs and corporate
                documents in real time
              </p>
              <div className="w-100 d-flex ">
                <img
                  src={verificationCardIcon1}
                  className="mx-auto mt-5"
                  style={{ maxWidth: "250px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="verification-card">
              <h3 className="text-center text-white mb-4">
                Verification through your own team
              </h3>
              <p className="fw-bolder">
                Feel authoritative & take complete control over your investor's
                information by manually verifying them yourself. Shufti Pro will
                gather the investor's ID and business documents for you and
                store them in the back office
              </p>
              <div className="w-100 d-flex">
                <img
                  src={verificationCardIcon2}
                  className="mx-auto mt-3 my-auto w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="shufti_pro_section p-5 row">
          <h3 className="text-white text-center">
            <span style={{ color: "#E46000" }}>SHUFTI PRO’S KYI</span> SOLUTION
            INDUSTRIAL USE CASES
          </h3>
          <p className="text-white text-center my-4">
            Helping global industries balance customer experience, compliance,
            and fraud prevention
          </p>
          <div className="shufti_pro_cards row row-cols-1 row-cols-md-5 justify-content-center gap-5">
            <div className="shufti_pro_card d-flex flex-column">
              <h6>Investment firms</h6>
              <p>
                Ensure that the investor is legit & suitable for making an
                investment in your products or services while making onboarding
                procedure seamless
              </p>
            </div>
            <div className="shufti_pro_card d-flex flex-column">
              <h6>Banks</h6>
              <p>
                Verify new account holders' identities and assess their risk of
                money laundering or terrorist financing while meeting compliance
                at a glance
              </p>
            </div>
            <div className="shufti_pro_card d-flex flex-column">
              <h6>Real estate firms</h6>
              <p>
                Protect your real-estate businesses from money laundering and
                non-compliance fine while ensuring legit onboarding investors in
                real-time
              </p>
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
      </div>
      <Footer />
    </>
  );
}

export default InformationKYI;
