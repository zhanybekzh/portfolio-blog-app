import React from "react";
import PostPageProperties from "@/app/components/PostPageProperties";
import PostPageHeader from "@/app/components/PostPageHeader";
import PostPageContent from "@/app/components/PostPageContent";
import { localizations } from "@/i18n/localizations";
import { generateMetadata as createMetadata } from "@/utils/generateMetadata";
import formatDate from "@/utils/formatDate";

async function fetchPost(slug: string, locale: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/works?locale=${localizations[locale]}&filters[urlSlug][$eq]=${slug}&populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function generateMetadata({ params }: any) {
  const work = await fetchPost(params.slug, params.locale);
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
const page = async ({ params }: any) => {
  const work = await fetchPost(params.slug, params.locale);
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
