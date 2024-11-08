import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getPosts = async () => {
    try {
      const res = await fetch(
        `https://strapi-for-blog-portfolio.onrender.com/api/blogs?populate=*`,
        {
          cache: "force-cache",
        }
      );
      const response = await res.json();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };
  const getWorks = async () => {
    try {
      const res = await fetch(
        `https://strapi-for-blog-portfolio.onrender.com/api/works?populate=*`,
        {
          cache: "force-cache",
        }
      );
      const response = await res.json();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };
  const posts = await getPosts();
  const works = await getWorks();
  const postsMap = posts.map((post: any) => {
    const languages = post.localizations.reduce((acc: any, localePost: any) => {
      const currentLocale = localePost.locale.slice(0,2);
      acc[currentLocale] = `https://zhanda.dev/${currentLocale === 'kk' ? 'kz' : currentLocale}/blog/${localePost.urlSlug}`;
      return acc;
    }, {});
    const result = {
      url: `https://zhanda.dev/ru/blog/${post.urlSlug}`,
      lastModified: post.Date,
      changeFrequency: "yearly",
      alternates: {
        languages
      }
    };
    return result;
  })
  const worksMap = works.map((work: any) => {
    const languages = work.localizations.reduce((acc: any, localeWork: any) => {
      const currentLocale = localeWork.locale.slice(0,2);
      acc[currentLocale] = `https://zhanda.dev/${currentLocale === 'kk' ? 'kz' : currentLocale}/works/${localeWork.urlSlug}`;
      return acc;
    }, {});
    const result = {
      url: `https://zhanda.dev/ru/works/${work.urlSlug}`,
      lastModified: work.Date,
      changeFrequency: "yearly",
      alternates: {
        languages
      }
    };
    console.log(result);
    return result;
  })
  return [
    {
      url: "https://zhanda.dev/ru",
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          en: "https://zhanda.dev/en",
          kk: "https://zhanda.dev/kz",
        },
      },
    },
    {
      url: "https://zhanda.dev/ru/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      alternates: {
        languages: {
          en: "https://zhanda.dev/en/blog",
          kk: "https://zhanda.dev/kz/blog",
        },
      },
    },
    {
      url: "https://zhanda.dev/ru/works",
      lastModified: new Date(),
      changeFrequency: "weekly",
      alternates: {
        languages: {
          en: "https://zhanda.dev/en/works",
          kk: "https://zhanda.dev/kz/works",
        },
      },
    },
    {
      url: "https://zhanda.dev/ru/contacts",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: "https://zhanda.dev/en/contacts",
          kk: "https://zhanda.dev/kz/contacts",
        },
      },
    },
    ...postsMap,
    ...worksMap
  ];
}
