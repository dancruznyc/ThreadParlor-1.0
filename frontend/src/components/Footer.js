import React from "react";
import "./Footer.css";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <section className="footer--container">
      <div className="footer--content">
        <div className="footer--social">
          <p>We want to hear from you!</p>
          <p>info@threadparlor.com</p>
          <div className="footer--social--icons">
            <FaTwitter /> <GrInstagram /> <ImFacebook2 /> <FaYoutube />
          </div>
        </div>
        <div className="footer--links">
          <ul className="footer--links-left">
            <li>About</li>
            <li>Locations</li>
            <li>Retailers</li>
            <li>FAQs</li>
          </ul>
          <ul className="footer--links-right">
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Customer Service</li>
            <li>News</li>
          </ul>
        </div>
        <div className="footer--address">
          2906 Pitkin Ave. Brooklyn, NY 11208
        </div>
      </div>
      <div className="footer--copy">
        Thread Parlor 2022 Designed by Dan De La Cruz
      </div>
    </section>
  );
};

export default Footer;
