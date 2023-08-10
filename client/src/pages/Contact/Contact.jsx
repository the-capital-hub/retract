import { call, message } from "../../assets/contact";
import { Footer, Navbar, Title, Search, Card } from "../../components";
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

        <Title
          title={"Still have some query"}
          subtitle={"Our experts will be happy to assist you with your queries"}
        />
        <div className="cards">
          <Card
            img={call}
            title={"Customer Support"}
            subtitle={
              "You may call us between Monday to Friday 9:00 am to 5:30 pm from your registered mobile number."
            }
            text={"Call Us"}
          />
          <Card
            img={message}
            title={"Email Us"}
            subtitle={
              "Write to us about your query and our customer support team will revert as soon as possible."
            }
            text={"Send Mail"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
