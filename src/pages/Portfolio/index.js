import React from "react";
import thumbnail_01 from "../../assets/thumbnail_01.png";
import thumbnail_02 from "../../assets/thumbnail_02.png";
import thumbnail_03 from "../../assets/thumbnail_03.png";

const Portfolio = () => {
  return (
    <div className="app__portfolio">
      <header className="portfolio__header">
        <h3>Projects</h3>
        <p>
          My single goal is to produce quality the highest quality of work for
          the clients and companies i work with on every project.
        </p>
      </header>
      <section className="portfolio__projects">
        <div className="portfolio__project-grid">
          <div className="portfolio__project-card">
            <img src={thumbnail_03} alt="Project thumbnail" />
            <h4>Google Lens</h4>
            <span>Brandig + UI/UX + Website</span>
          </div>
          <div className="portfolio__project-card">
            <img src={thumbnail_01} alt="Project thumbnail" />
            <h4>Google Lens</h4>
            <span>Brandig + UI/UX + Website</span>
          </div>
          <div className="portfolio__project-card">
            <img src={thumbnail_02} alt="Project thumbnail" />
            <h4>Google Lens</h4>
            <span>Brandig + UI/UX + Website</span>
          </div>
          <div className="portfolio__project-card">
            <img src={thumbnail_02} alt="Project thumbnail" />
            <h4>Google Lens</h4>
            <span>Brandig + UI/UX + Website</span>
          </div>
          <div className="portfolio__project-card">
            <img src={thumbnail_03} alt="Project thumbnail" />
            <h4>Google Lens</h4>
            <span>Brandig + UI/UX + Website</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
