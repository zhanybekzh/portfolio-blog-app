import React from 'react';
import { useTranslations } from "next-intl";

const BlogSectionHead = () => {
  const t = useTranslations("BlogSection");
  return (
    <h1 className="blog-section__head">{t("heading")}</h1>
  )
}

export default BlogSectionHead
