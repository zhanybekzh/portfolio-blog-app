import React from "react";
import PostPageProperties from "@/app/components/PostPageProperties";
import PostPageHeader from "@/app/components/PostPageHeader";
import PostPageContent from "@/app/components/PostPageContent";
import { localizations } from "@/i18n/localizations";
import { generateMetadata as createMetadata } from "@/utils/generateMetadata";
import formatDate from '@/utils/formatDate';

async function fetchPost(slug: string, locale: string) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `https://strapi-for-blog-portfolio.onrender.com/api/blogs?locale=${localizations[locale]}&filters[urlSlug][$eq]=${slug}&populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function generateMetadata({ params }: any) {
  const post = await fetchPost(params.slug, params.locale);
  const postData = post?.data[0];

  if (postData) {
    return createMetadata({
      title: postData.Title,
      description: postData.Description,
      slug: `${params.locale}/blogs/${params.slug}`,
      author: "Жанда",
      datePublished: formatDate(postData.Date),
    });
  }

  return {
    title: "Статья не найдена",
    description: "Запрашиваемая статья не найдена.",
  };
}
export default async function page({ params }: any) {
  const post = await fetchPost(params.slug, params.locale);
  const postData = post?.data[0];

  return (
    <main className="post-page">
      <div className="container">
        <div className="row">
          <PostPageHeader title={postData?.Title} />
          <div className="post-page__content">
            <PostPageProperties
              date={postData?.Date}
              categories={postData?.categories?.map(
                (category: any) => category.Title
              )}
            />
            <PostPageContent content={postData?.Content} />
          </div>
        </div>
      </div>
    </main>
  );
}
