import React from "react";
import WorksSectionClient from "@/app/components/WorksSectionClient";
import "@/app/styles/works-section.scss";
import { localizations } from "@/i18n/localizations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Примеры выполненных работ",
  description:
    "Раздел с примерами выполненных мною проектов по веб-разработке, включая создание сайтов и веб-приложений с использованием современных технологий, таких как React и Next.js.",
};

async function fetchWorks(locale: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/works?locale=${localizations[locale]}&sort=Date:desc&populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
const WorksSection = async ({ params }: any) => {
  const data = await fetchWorks(params.locale);
  return <WorksSectionClient works={data} />;
};

export default WorksSection;
