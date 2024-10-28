"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Work from "./Work";

const WorksSectionClient = ({ works }: any) => {
  const t = useTranslations("WorksSection");

  return (
    <main className="works-section">
      <div className="container">
        <div className="row">
          <h1 className="works-section__head">{t("my-works")}</h1>
          <div className="works-section__list">
            {works?.data?.map((workItem: any) => {
              return <Work workItem={workItem} key={workItem.id} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorksSectionClient;
