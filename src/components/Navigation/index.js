import React, { useEffect, useState } from "react";

import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import humburger from "../../assets/ion_menu.svg";
import closeMenu from "../../assets/ion_close.svg";

import Button from "../Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".app__navigation");
    const navList = document.querySelector(".navigation__nav");

    nav.addEventListener("click", (e) => {
      const elem = e.target;

      if (elem.classList.contains("menu") || elem.closest(".menu")) {
        menu ? setMenu(false) : setMenu(true);
        navList.classList.toggle("navigation__nav--hidden");
      }
    });

    return () =>
      nav.removeEventListener("click", function () {
        console.log("Removed");
      });
  }, [menu]);

  return (
    <nav className="app__navigation">
      <div className="navigation__logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className="navigation__nav navigation__nav--hidden">
        <div className="navigation__inner">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/about">About</Link>
            </li>
            <li className="navigation__item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="navigation__item">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>

          <div className="navigation__social-icons">
            <Link
              to={{ pathname: "https://linkedin.com/in/whitegodkingsley" }}
              target="_blank"
              className="navigation__social-icon"
            >
              <img src={linkedin} alt="logo" className="linkedin icon" />
            </Link>

            <Link
              to={{ pathname: "https://github.com/iamwhitegod" }}
              target="_blank"
              className="navigation__social-icon"
            >
              <img src={github} alt="logo" className="github icon" />
            </Link>

            <Link
              to={{ pathname: "https://twitter.com/iamwhitegod" }}
              target="_blank"
              className="navigation__social-icon"
            >
              <img src={twitter} alt="logo" className="twitter icon" />
            </Link>

            <Link
              to={{ pathname: "https://instagram.com/iamwhitegod" }}
              target="_blank"
              className="navigation__social-icon"
            >
              <img src={instagram} alt="logo" className="instagram icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="navigation__mobile-btn">
        <Button classname="menu">
          <img src={menu ? closeMenu : humburger} alt="humburger menu" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
