import React from "react";
import BlogPosts from "../../components/BlogPosts";
import "./../../styles/blog-page.scss";
import { localizations } from "@/i18n/localizations";
import { getTranslations } from "next-intl/server";
import BlogSectionHead from "@/app/components/BlogSectionHead";
import { setRequestLocale } from "next-intl/server";

export const dynamic = "force-static";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "BlogSectionMetadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

async function fetchPosts(locale: string) {
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/blogs?locale=${localizations[locale]}&sort=Date:desc&populate=*`,
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
const blogSection = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setRequestLocale(locale);
  const data = await fetchPosts(locale);
  return (
    <main className="blog-section">
      <div className="container">
        <div className="row">
          <BlogSectionHead />
          <div className="blog-section-posts__list">
            <BlogPosts posts={data} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default blogSection;
