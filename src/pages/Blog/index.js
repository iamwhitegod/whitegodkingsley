import React from "react";

import avatar from "../../assets/whitegod_avatar.png";

const Blog = () => {
  return (
    <div className="app__blog">
      <div className="blog__header">
        <div className="blog__header-text">
          <h3>Hello, welcome to my blog</h3>
          <p>
            I’m Whitegod Kingsley, a frontend engineer. A clean code advocate,
            builds scalable and maintainable codebase, team player with an
            open-mind to learn new things and explore new opportunities in tech.{" "}
          </p>
          <p>
            Here, i share my thoughs and opinons about tech, culture, growth,
            polities and religion.
          </p>
        </div>
        <div className="blog__header-avatar">
          <img src={avatar} alt="Whitegod's avatar" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
