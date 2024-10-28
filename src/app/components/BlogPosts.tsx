import React from "react";
import Link from "next/link";

const BlogPosts = ({ posts }: any) => {
  return (
    <>
      {posts?.data?.map((post: any) => {
        return (
          <div key={post.id} className="post">
            <h3 className="post__title">
              <Link href={`blog/${post.urlSlug}`}>{post.Title}</Link>
            </h3>
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
        );
      })}
    </>
  );
};

export default BlogPosts;
