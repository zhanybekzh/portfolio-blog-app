import React from "react";
import Work from "./Work";
import { localizations } from "@/i18n/localizations";

export const dynamic = "force-static";

async function fetchLastWorks(locale: string) {
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/works?locale=${localizations[locale]}&sort=Date:desc&populate=*&pagination[limit]=4`,
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
const Works = async ({ locale }: { locale: string }) => {
  const lastWorks = await fetchLastWorks(locale);
  return (
    <>
      {lastWorks?.data?.map((workItem: any) => {
        return <Work workItem={workItem} key={workItem.id} />;
      })}
    </>
  );
};

export default Works;
