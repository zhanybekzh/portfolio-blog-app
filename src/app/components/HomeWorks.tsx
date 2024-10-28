import React from "react";
import Work from "./Work";
import { localizations } from "@/i18n/localizations";


async function fetchLastWorks(locale: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/works?locale=${localizations[locale]}&sort=Date:desc&populate=*&pagination[limit]=4`,
      options
    );
    const response = await res.json();
    return response;
  } catch (e) {
    throw new Error("Не получилось загрузить данные Blogs");
  }
}
const Works = async ({ locale }: any) => {
  const lastWorks = await fetchLastWorks(locale);
  return (
    <>
      {lastWorks?.data?.map((workItem: any) => {
        return <Work workItem={workItem} key={workItem.id}/>;
      })}
    </>
  );
};

export default Works;
