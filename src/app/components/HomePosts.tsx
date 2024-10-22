import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <>
      <Post />

      <a className="post-link" href="">
        <div className="recent-posts__post post">
          <h3 className="post__title">Creating pixel perfect icons in Figma</h3>
          <div className="post__properties">
            <div className="post__date">12 Feb 2020</div>
            <div className="post__theme">Design, Pattern</div>
          </div>
          <div className="post__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id
            excepturi sit! Voluptatum necessitatibus sit et quisquam voluptatem
            reprehenderit dolores, alias quis minus eveniet mollitia neque
            officiis tenetur similique modi!
          </div>
        </div>
      </a>
      <a className="post-link" href="">
        <div className="recent-posts__post post">
          <h3 className="post__title">Creating pixel perfect icons in Figma</h3>
          <div className="post__properties">
            <div className="post__date">12 Feb 2020</div>
            <div className="post__theme">Design, Pattern</div>
          </div>
          <div className="post__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id
            excepturi sit! Voluptatum necessitatibus sit et quisquam voluptatem
            reprehenderit dolores, alias quis minus eveniet mollitia neque
            officiis tenetur similique modi!
          </div>
        </div>
      </a>
    </>
  );
};

export default Posts;
