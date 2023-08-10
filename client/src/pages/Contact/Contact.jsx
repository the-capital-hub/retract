import { Footer, Navbar, Title } from "../../components";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <Navbar />
      <div className="contactContainer">
        <Title
          title={"How can we help you today ?"}
          subtitle={"Select from most common topic or start typing below"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
