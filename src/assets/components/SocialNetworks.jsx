import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./styles/SocialNetworks.scss";

export function SocialNetworks() {
  return (
    <div className="socialNetworks">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/mauro-pepa-dev" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mauropepa97/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/PEPAXD?tab=stars" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}
