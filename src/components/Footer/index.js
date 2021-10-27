import React from "react";

import arrowIcon from "../../assets/back-to-top.svg";
import Button from "../Button";

const Footer = () => {
  return <footer className="app__footer">
    <div className="footer__content">
      <p className="footer__copyright">2021 &copy; Whitegod Kingsley.  All rights reserved.</p>
      <Button classname="btn btn--text-icon">
        <span>Back to Top</span>
        <img src={arrowIcon} alt="back-to-top icon" />
      </Button>
    </div>
  </footer>
}

export default Footer;