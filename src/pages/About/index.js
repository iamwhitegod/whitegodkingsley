import React from "react";

import Parallax from "react-rellax";
import arrowSm from "../../assets/arrow-sm-left.svg";
import whitegod01 from "../../assets/whitegod_about_img.png";

const About = () => {
  return (
    <div className="app__about" id="top">
      <section className="section-intro">
        <div className="intro__content-box">
          <Parallax speed={-1.5}>
            <span className="heading-caption">Find informations 👨</span>
            <h2 className="heading-main heading-main-2">
              <span>About Me and</span>
              <span> What I Love To Do.</span>
            </h2>
          </Parallax>
        </div>
      </section>

      <section className="section-about about">
        <Parallax speed={0.5}>
          <div className="about__details">
            <figure className="about__img">
              {/*eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={whitegod01} alt="Photo of whitegod" />
            </figure>

            <div className="about__bio">
              <p>
                I'm a developer resident in Port Harcourt Nigeria, with 2+ years
                of experience in deploying and maintaining digital products. I
                work mainly with the MERN Stack and other modern technologies in
                the Javascript Ecosystem.
              </p>

              <p>
                As a user-centric developer, I like to be fully involved with
                the development process of building products that solve users
                problems and meets stakeholders requirements. Using my big head
                and a wide variety of industry standards, best practices and
                methodologies, I am able to carry out research for user needs,
                data flow and features, conceptualize actual solutions and test
                them with final end-users.
              </p>

              <p>
                I currently work as a freelance developer, also designed
                interfaces for small companies & startups. I also teach newbies,
                developers, how to code at devsfastlane.
              </p>

              <p>
                I write too! My thoughts and writings go up on Medium and you
                can also find articles I have written right here. Currently, I'm
                learning more advanced topics like systems design, algorithms &
                data structures to help season my skills. I have an obsession
                for chicken pepper soup and enjoy workout to stay healthy. You
                can almost always find me listening to music or watching some
                good content on YouTube.
              </p>
            </div>
          </div>
        </Parallax>
      </section>

      <section className="section-contact">
        <div className="about__content-box">
          <Parallax speed={0.1} style={{ marginTop: 12.4 }}>
            <span className="heading-caption">Let’s work together 🤝</span>
            <h2 className="heading-primary uti-margin-b">
              Contact
              <img src={arrowSm} alt="arrow-icon" className="about__icon" />
            </h2>
          </Parallax>
        </div>
      </section>
    </div>
  );
};

export default About;
