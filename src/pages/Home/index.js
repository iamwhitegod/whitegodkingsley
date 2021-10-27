import React from "react";

import arrowSm from "../../assets/arrow-sm-left.svg";

const Home = () => {
  return (
    <div className="app__home">
      <section className="section-intro">
        <div className="intro__content-box">
          <span className="heading-caption">Hi there👋</span>
          <h1 className="heading-main">
            <span>I am</span>
            <span>Whitegod</span>
          </h1>
        </div>
      </section>

      <section className="section-about">
        <div className="about__content-box">
          <span className="heading-caption">Developer👨‍💻</span>
          <h2 className="heading-primary uti-margin-b">
            About Me
            <img src={arrowSm} alt="arrow-icon" className="about__icon" />
          </h2>
          <p className="description-primary">
            I believe in diverse skill sets and people as they make products and
            communities unique.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
