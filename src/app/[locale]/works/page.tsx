import React from "react";
import WorksSectionClient from "@/app/components/WorksSectionClient";
import "@/app/styles/works-section.scss";
import { localizations } from "@/i18n/localizations";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-static";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "WorksSectionMetadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

async function fetchWorks(locale: string) {
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/works?locale=${localizations[locale]}&sort=Date:desc&populate=*`,
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
const WorksSection = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setRequestLocale(locale);
  const data = await fetchWorks(locale);
  return <WorksSectionClient works={data} />;
};

export default WorksSection;
