import React from "react";
import BlogPosts from "../components/BlogPosts";
import "./../styles/blog-page.scss";

const blogSection = () => {
  return (
    <main className="blog-section">
      <div className="container">
        <div className="row">
          <h1 className="blog-section__head">Blog</h1>
          <div className="blog-section-posts__list">
            <BlogPosts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default blogSection;
