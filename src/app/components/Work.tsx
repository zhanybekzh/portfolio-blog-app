import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


const Work = ({ workItem }: any) => {
  const t = useTranslations("WorksSection");

  const imageUrl = `${workItem?.Image?.formats?.small?.url}`;
  const getYearFromDate = (date: any) => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    return year;
  }
  return (
    <div className="work">
      <div className="work__img">
        <img src={imageUrl} alt={`image for ${workItem.Title}`}/>
      </div>
      <div className="work__content">
        <h3 className="work__title">{workItem.Title} </h3>
        <div className="work__properties">
          <div className="work__date">{getYearFromDate(workItem.Date)}</div>
          <div className="work__theme">{workItem.Subject}</div>
        </div>
        <div className="work__description">
          {workItem.Description}
        </div>
        <div className="work__buttons">
          <Link href={`works/${workItem.urlSlug}`} className="work__button-about btn btn-black">{t("more")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
