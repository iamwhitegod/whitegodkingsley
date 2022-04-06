import React from "react";

import avatar from "../../assets/whitegod_avatar.png";
import blog_thumbnail from "../../assets/blog_img.png";

const Blog = () => {
  return (
    <div className="app__blog">
      <header className="blog__header">
        <div className="blog__header-text">
          <h2>Hello, welcome to my blog</h2>
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
      </header>

      <section className="blog__posts">
        <div className="blog__post-grid">
          <div className="blog__post-card">
            <img src={blog_thumbnail} alt="post thumbnail" />
            <h2>How To Fund open source for FREE</h2>
            <div className="blog__datetime">
              <span>Dec 6, 2020</span>
              <span>5 mins Read</span>
            </div>
            <p>
              This article aims to give everyone more insight into why open
              source is not Free. Depending on which track got you into open
              source, we all know one thing in common “collaboration.” It is
              important because this makes the open source model great. So...
            </p>
          </div>
          <div className="blog__post-card">
            <img src={blog_thumbnail} alt="post thumbnail" />
            <h2>How To Fund open source for FREE</h2>
            <div className="blog__datetime">
              <span>Dec 6, 2020</span>
              <span>5 mins Read</span>
            </div>
            <p>
              This article aims to give everyone more insight into why open
              source is not Free. Depending on which track got you into open
              source, we all know one thing in common “collaboration.” It is
              important because this makes the open source model great. So...
            </p>
          </div>
          <div className="blog__post-card">
            <img src={blog_thumbnail} alt="post thumbnail" />
            <h2>How To Fund open source for FREE</h2>
            <div className="blog__datetime">
              <span>Dec 6, 2020</span>
              <span>5 mins Read</span>
            </div>
            <p>
              This article aims to give everyone more insight into why open
              source is not Free. Depending on which track got you into open
              source, we all know one thing in common “collaboration.” It is
              important because this makes the open source model great. So...
            </p>
          </div>
          <div className="blog__post-card">
            <img src={blog_thumbnail} alt="post thumbnail" />
            <h2>How To Fund open source for FREE</h2>
            <div className="blog__datetime">
              <span>Dec 6, 2020</span>
              <span>5 mins Read</span>
            </div>
            <p>
              This article aims to give everyone more insight into why open
              source is not Free. Depending on which track got you into open
              source, we all know one thing in common “collaboration.” It is
              important because this makes the open source model great. So...
            </p>
          </div>
          <div className="blog__post-card">
            <img src={blog_thumbnail} alt="post thumbnail" />
            <h2>How To Fund open source for FREE</h2>
            <div className="blog__datetime">
              <span>Dec 6, 2020</span>
              <span>5 mins Read</span>
            </div>
            <p>
              This article aims to give everyone more insight into why open
              source is not Free. Depending on which track got you into open
              source, we all know one thing in common “collaboration.” It is
              important because this makes the open source model great. So...
            </p>
          </div>
        </div>
      </section>

      <section className="newsletter__section">
        <form action="">
          <p>Never miss upcoming my articles on Frontend & Tech in general</p>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            id="email"
          />
          <button className="newsletter__btn" type="submit">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Blog;
