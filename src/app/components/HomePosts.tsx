import React from "react";
import Post from "./Post";
import { localizations } from "@/i18n/localizations";

async function fetchLastPosts(locale: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/blogs?locale=${localizations[locale]}&sort=Date:desc&populate=*&pagination[limit]=3`,
      options
    );
    const response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function generateStaticParams() {
  return Object.keys(localizations).map((locale) => ({
    locale,
  }));
}
const Posts = async ({ params }: { params: { locale: string } }) => {
  const lastPosts = await fetchLastPosts(params.locale);
  return lastPosts?.data?.map((post: any) => (
    <Post key={post.id} post={post} />
  ));
};

export default Posts;
