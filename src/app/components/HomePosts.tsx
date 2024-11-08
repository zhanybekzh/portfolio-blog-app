import React from "react";
import Post from "./Post";
import { localizations } from "@/i18n/localizations";

export const dynamic = "force-static";
async function fetchLastPosts(locale: string) {
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/blogs?locale=${localizations[locale]}&sort=Date:desc&populate=*&pagination[limit]=3`,
      {
        cache: "force-cache",
      }
    );
    const response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}

const Posts = async ({ locale }: { locale: string }) => {
  const lastPosts = await fetchLastPosts(locale);
  return lastPosts?.data?.map((post: any) => (
    <Post key={post.id} post={post} />
  ));
};

export default Posts;
