import React from "react";

import Parallax from "react-rellax";
import arrowSm from "../../assets/arrow-sm-left.svg";

const Home = () => {
  return (
    <div className="app__home">
      <section className="section-intro">
        <div className="intro__content-box">
          <Parallax speed={-4}>
            <span className="heading-caption">Hi there👋</span>
            <h1 className="heading-main">
              <span>I am</span>
              <span>Whitegod</span>
            </h1>
          </Parallax>
        </div>
      </section>

      <section className="section-about">
        <div className="about__content-box">
          <Parallax speed={1} style={{ marginTop: "9.6" }}>
            <span className="heading-caption">Developer👨‍💻</span>
            <h2 className="heading-primary uti-margin-b">
              About Me
              <img src={arrowSm} alt="arrow-icon" className="about__icon" />
            </h2>
            <p className="description-primary">
              I believe in diverse skill sets and people as they make products
              and communities unique.
            </p>
          </Parallax>
        </div>
      </section>
    </div>
  );
};

export default Home;
