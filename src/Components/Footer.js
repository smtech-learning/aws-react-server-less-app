import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faYoutube,
  faMedium,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className='social-icons-container'>
      <FontAwesomeIcon
        className='social-icon-footer'
        icon={faLinkedinIn}
        size='2x'
      />
      <FontAwesomeIcon
        className='social-icon-footer'
        icon={faYoutube}
        size='2x'
      />
      <FontAwesomeIcon
        className='social-icon-footer'
        icon={faMedium}
        size='2x'
      />
      <FontAwesomeIcon
        className='social-icon-footer'
        icon={faTwitter}
        size='2x'
      />
      <FontAwesomeIcon
        className='social-icon-footer'
        icon={faGithub}
        size='2x'
      />
    </div>
  );
}
