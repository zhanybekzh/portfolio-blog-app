import React from 'react'

const Post = () => {
  return (
    <a className="post-link" href="">
        <div className="post">
          <h3 className="post__title">Making a design system from scratch</h3>
          <div className="post__properties">
            <div className="post__date">12 Feb 2020</div>
            <div className="post__theme">Design, Pattern</div>
          </div>
          <div className="post__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            omnis corporis minus nihil eveniet dolores quae amet recusandae
            laborum? Possimus illo quidem ex praesentium quis, eum quam sequi
            rerum amet.
          </div>
        </div>
      </a>
  )
}

export default Post
