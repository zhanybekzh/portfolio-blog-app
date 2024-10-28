import React from "react";
import { Link } from "@/i18n/routing";

const Post = ({ post }: any) => {
  return (
    <Link className="post-link" href={'/blog/' + post.urlSlug}>
      <div className="post">
        <h3 className="post__title">{post.Title}</h3>
        <div className="post__properties">
          <div className="post__date">{post.Date}</div>
          <div className="post__theme">
            {post?.categories
              ?.map((category: any) => category.Title)
              .join(", ")}
          </div>
        </div>
        <div className="post__description">{post.Description}</div>
      </div>
    </Link>
  );
};

export default Post;
