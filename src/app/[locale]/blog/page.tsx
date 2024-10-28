import React from "react";
import BlogPosts from "../../components/BlogPosts";
import "./../../styles/blog-page.scss";
import { localizations } from "@/i18n/localizations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог веб-разработчика",
  description: "Блог веб-разработчика Жанда из Казахстана, где я делюсь своим опытом в веб-разработке, рассказываю о проектах, технологиях и интересных событиях из жизни.",
};


async function fetchPosts(locale: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs?locale=${localizations[locale]}&sort=Date:desc&populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
    throw new Error("Не получилось загрузить данные Blogs");
  }
}
const blogSection = async ({ params }: any) => {
  const data = await fetchPosts(params.locale);
  return (
    <main className="blog-section">
      <div className="container">
        <div className="row">
          <h1 className="blog-section__head">Blog</h1>
          <div className="blog-section-posts__list">
            <BlogPosts posts={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default blogSection;
