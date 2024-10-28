'use client';

import React from "react";
import * as Icon from "react-feather";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function PostHeader({ title }: { title: string }) {
  const router = useRouter();
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("./");
  };
  const t = useTranslations('Buttons');

  return (
    <div className="post-header">
      <a href="" onClick={handleBack} className="link-to-page">
        <Icon.ChevronLeft className="icon icon-20"/>{t("back")}
      </a>
      <h1 className="post-page__head">{title}</h1>
    </div>
  );
}
