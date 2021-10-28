import React, { useEffect } from "react";

import arrowIcon from "../../assets/back-to-top.svg";
import Button from "../Button";
import Parallax from "react-rellax";

const Footer = () => {
  useEffect(() => {
    const backToTopBtn = document.querySelector(".btn--text-icon");
    console.log("Add");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
    return () => {
      backToTopBtn.removeEventListener("click", console.log("removed"));
    };
  }, []);

  return (
    <footer className="app__footer">
      <Parallax speed={0.3}>
        <div className="footer__content">
          <p className="footer__copyright">
            2021 &copy; Whitegod Kingsley. All rights reserved.
          </p>
          <Button classname="btn btn--text-icon">
            <span>Back to Top</span>
            <img src={arrowIcon} alt="back-to-top icon" />
          </Button>
        </div>
      </Parallax>
    </footer>
  );
};

export default Footer;
