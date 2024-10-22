import * as Icon from "react-feather";
import Posts from "./components/HomePosts";
import Works from "./components/HomeWorks";

export default function Home() {
  return (
    <main className="home">
      <section className="section about-me">
        <div className="container">
          <div className="about-me__inner">
            <div className="about-me__photo">
              <div className="img__wrapper">
                <img src="/images/ava.webp" alt="Моя фотография" />
              </div>
            </div>
            <div className="about-me__content">
              <h1 className="about-me__head">
                Hi, I am Zhanda,
                <br />A web developer from KZ&nbsp;🇰🇿
              </h1>
              <p className="about-me__text">
                I create efficient web solutions and take on both frontend and
                backend projects separately or as a full-stack. Ready to
                collaborate on new and exciting ideas!
              </p>
              <div className="about-me__buttons">
                <a
                  href="/files/cv.pdf"
                  download
                  className="about-me__button btn btn-primary"
                >
                  Download CV
                </a>
                <a
                  href="./contacts"
                  className="about-me__button btn btn-secondary"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section recent-posts">
        <div className="container">
          <div className="row">
            <h2 className="col-12 recent-posts__head">Recent posts</h2>
            <div className="recent-posts__list posts__list">
              <Posts />
            </div>
            <a href="/blog/" className="link-to-page">
              all posts
              <Icon.ChevronsRight className="icon icon-20" />
            </a>
          </div>
        </div>
      </section>
      <section className="recent-works">
        <div className="container">
          <div className="row">
            <h2 className="col-12 recent-works__head">Featured works</h2>
            <div className="recent-works__list">
              <Works />
            </div>
            <a href="/works/" className="link-to-page">
              all works
              <Icon.ChevronsRight className="icon icon-20" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
