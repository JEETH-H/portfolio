import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi,
          <span> Welcome to my Website</span>
        </h1>
        <p className="h-sub-text">
          Programmer | Graphics Designer | Artist | Photographer
        </p>
        <div className="icons">
          <Link to="https://www.facebook.com/jitheshkudupu1" className="icon-content" target='_blank' >
            <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
          </Link>
          <Link  className="icon-content" target='_blank'>
            <FontAwesomeIcon icon={faInstagram} className="icon in"/>
          </Link>
          <Link  className="icon-content" target='_blank'>
            <FontAwesomeIcon icon={faGithub} className="icon git"/>
          </Link>
          <Link to="https://www.youtube.com/c/CodeTheWebz" className="icon-content" target='_blank'>
            <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
