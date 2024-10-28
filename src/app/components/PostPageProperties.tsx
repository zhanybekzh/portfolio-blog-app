import React from "react";

export default function PostProperties({
  date,
  categories,
}: {
  date: string;
  categories: string[];
}) {
  return (
    <div className="post-page__properties">
      <div className="post-page__date">{date}</div>
      <div className="post-page__categories">
        {categories && categories.join(", ")}
      </div>
    </div>
  );
}
