import React from "react";

function ContactItems({icon, text1, text2, tittle}) {
  return (
    <div className="ContactItem">
        <div className="contact">
            <img src={icon} alt="" />
            <div className="right-items">
                <h6>{tittle}</h6>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    </div>
  );
}

export default ContactItems;
