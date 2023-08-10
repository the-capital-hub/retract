import { Footer, Navbar, Title } from "../../components";
import Search from "../../components/Search/Search";
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
        <Search />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
