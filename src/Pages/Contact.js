import React from "react";
import ContactItems from "../Components/ContactItems";
import Tittle from "../Components/Title";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
function Contact() {
  return (
    <div>
      <div className="tittle">
        <Tittle title={"Contact"} span={"Contact"} />
      </div>
      <div className="contactpage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItems
            icon={phone}
            text1={"+91 789456123"}
            text2={"+91 789456123"}
            tittle={"phone"}
          />
          <ContactItems
            icon={email}
            text1={"+91 789456123"}
            text2={"+91 789456123"}
            tittle={"email"}
          />
          <ContactItems
            icon={location}
            text1={"+91 789456123"}
            text2={"+91 789456123"}
            tittle={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
