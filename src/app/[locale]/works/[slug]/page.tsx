import React from "react";
import PostPageProperties from "@/app/components/PostPageProperties";
import PostPageHeader from "@/app/components/PostPageHeader";
import PostPageContent from "@/app/components/PostPageContent";
import { localizations } from "@/i18n/localizations";
import { generateMetadata as createMetadata } from "@/utils/generateMetadata";
import formatDate from "@/utils/formatDate";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const params = await Promise.all(
    Object.keys(localizations).map(async (locale) => {
      const res = await fetch(
        `https://strapi-for-blog-portfolio.onrender.com/api/works?locale=${localizations[locale]}&populate=*`,
        {
          cache: "force-cache",
        }
      );
      const response = await res.json();
      const works = response.data;
      return works.map((work: any) => ({
        slug: work.urlSlug,
        locale,
      }));
    })
  );
  return params.flat();
}

async function fetchWork(slug: string, locale: string) {
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/works?locale=${localizations[locale]}&filters[urlSlug][$eq]=${slug}&populate=*`,
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
export async function generateMetadata({ params }: any) {
  const work = await fetchWork(params.slug, params.locale);
  const workItem = work?.data[0];

  if (workItem) {
    return createMetadata({
      title: workItem.Title,
      description: workItem.Description,
      slug: `${params.locale}/works/${params.slug}`,
      author: "Жанда",
      datePublished: formatDate(workItem.Date),
    });
  }
  return {
    title: "Статья не найдена",
    description: "Запрашиваемая статья не найдена.",
  };
}
const page = async ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  setRequestLocale(params.locale);
  const work = await fetchWork(params.slug, params.locale);
  const workItem = work?.data[0];
  return (
    <main className="post-page">
      <div className="container">
        <div className="row">
          <PostPageHeader title={workItem?.Title} />
          <div className="post-page__content">
            <PostPageProperties
              date={workItem?.Date}
              categories={workItem?.skills?.map((skill: any) => skill.Title)}
            />
            <PostPageContent content={workItem?.Content} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
