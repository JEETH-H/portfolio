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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.056630625804!2d74.89141931434344!3d12.904080119848821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba359e65bfdc7df%3A0x572cc8ac079c18da!2sKudupu%20Shree%20Anantha%20Padmanabha%20Temple!5e0!3m2!1sen!2sin!4v1621601632726!5m2!1sen!2sin"
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
