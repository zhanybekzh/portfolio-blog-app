import type { Metadata } from "next";

interface BlogPostProps {
  title: string;
  description: string;
  slug: string;
  author: string;
  datePublished: string;
}

export function generateMetadata({ title, description, slug }: BlogPostProps): Metadata {
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://zhanda.kz/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: title,
      description: description,
    },
  };
}