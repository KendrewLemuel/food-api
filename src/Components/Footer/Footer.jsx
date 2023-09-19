import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div class="footer">
      <div class="row">
        <a href="https://www.facebook.com/kendrew.lemuel.7">
          <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/kendrewlemuel_/?hl=id">
          <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/kendrew-lemuel">
          <FontAwesomeIcon className="footer-icon" icon={faLinkedin} />
        </a>
        <a
          href="
          https://wa.me/+6281234555987"
        >
          <FontAwesomeIcon className="footer-icon" icon={faWhatsapp} />
        </a>
      </div>

      <div class="row">
        <ul>
          <li>
            <a href="/">Contact us</a>
          </li>
          <li>
            <a href="/">Our Services</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms & Conditions</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
        </ul>
      </div>

      <div class="row">
        Kendrew Copyright © 2023 Inferno - All rights reserved
      </div>
    </div>
  );
};

export default Footer;
