import * as Icon from "react-feather";
import HomePosts from "./../components/HomePosts";
import HomeWorks from "./../components/HomeWorks";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { localizations } from "@/i18n/localizations";

export async function generateStaticParams() {
  return Object.keys(localizations).map((locale) => ({
    locale,
  }));
}
export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("Home");
  const NonBreakingSpace = () => <>&nbsp;</>;
  return (
    <>
      <main className="home">
        <section className="section about-me">
          <div className="container">
            <div className="about-me__inner">
              <div className="about-me__photo">
                <div className="img__wrapper">
                  <Image
                    src="/images/ava.webp"
                    width={500}
                    height={500}
                    alt="Моя фотография"
                  />
                </div>
              </div>
              <div className="about-me__content">
                <h1 className="about-me__head">
                  {t.rich("head-text", {
                    br: () => <br />,
                    nonBreak: () => <NonBreakingSpace />,
                  })}
                </h1>
                <p className="about-me__text">{t("about-me")}</p>
                <div className="about-me__buttons">
                  <a
                    href="/files/Zhanybek_Zhandos_CV.pdf?01.01.2024"
                    download
                    className="about-me__button btn btn-primary"
                  >
                    {t("download-cv")}
                  </a>
                  <Link
                    className="about-me__button btn btn-secondary"
                    href="/contacts"
                  >
                    {t("hire-me")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section recent-posts">
          <div className="container">
            <div className="row">
              <h2 className="col-12 recent-posts__head">{t("recent-posts")}</h2>
              <div className="recent-posts__list posts__list">
                <HomePosts locale={params.locale} />
              </div>
              <Link href="/blog/" className="link-to-page">
                {t("to-blog")}
                <Icon.ChevronsRight className="icon icon-20" />
              </Link>
            </div>
          </div>
        </section>
        <section className="recent-works">
          <div className="container">
            <div className="row">
              <h2 className="col-12 recent-works__head">{t("last-works")}</h2>
              <div className="recent-works__list">
                <HomeWorks locale={params.locale} />
              </div>
              <Link href="/works/" className="link-to-page">
                {t("to-works")}
                <Icon.ChevronsRight className="icon icon-20" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
